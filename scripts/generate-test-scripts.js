const fs = require("fs");
const readline = require('readline');

const SKIP_STU3_TEST_RESOURCES = [
  "AllergyIntolerance",
  "CapabilityStatement",
  "Composition",
  "DataElement",
  "NutritionOrder",
  "SearchParameter",
  "StructureDefinition"
];

process.stdout.write("Generating test files\n");
["r4", "stu3"].forEach(fhirVersion => {
  process.stdout.write(`\nFHIR version ${fhirVersion}\n`);
  const jsDirectory = `${__dirname}/../${fhirVersion}/js/`;
  const testsDirectory = `${__dirname}/../__tests__/${fhirVersion}/`;
  const jsonDirectory = `${__dirname}/../__tests__/${fhirVersion}-resources/`;

  if (!fs.existsSync(testsDirectory)) {
    fs.mkdirSync(testsDirectory, { recursive: true });
  }

  const resourcesToTest = fs
    .readdirSync(jsDirectory)
    .map(jsName => jsName.replace(".js", ""))
    .filter(
      resourceName =>
        fhirVersion === "r4" || !SKIP_STU3_TEST_RESOURCES.includes(resourceName)
    );

  const exampleJsonFiles = fs
    .readdirSync(jsonDirectory)
    .filter(filename => filename.endsWith(".json"));

  resourcesToTest.forEach((resourceName, index) => {
    const validatorFunctionName = `${resourceName.toLowerCase()}ValidateFunction`;
    let testString = `const ${validatorFunctionName} = require("../../${fhirVersion}/js/${resourceName}");\n\n`;
    testString += `describe("${resourceName}", () => {\n`;
    let examplesForThisResource = 0;
    exampleJsonFiles.forEach(exampleJsonFile => {
      const jsonResourceName = exampleJsonFile.split("-")[0];
      if (jsonResourceName === resourceName) {
        const fileContent = fs.readFileSync(
          `${jsonDirectory}${exampleJsonFile}`,
          "utf-8"
        );
        let hasErrorDuringReading = false;
        let jsonContent;
        try {
          jsonContent = JSON.parse(fileContent);
        } catch (e) {
          hasErrorDuringReading = true;
        }
        if (!hasErrorDuringReading) {
          const includesOtherResources =
            (jsonContent.entry &&
              Array.isArray(jsonContent.entry) &&
              jsonContent.entry.some(
                entryObject =>
                  entryObject.resource &&
                  entryObject.resource.resourceType &&
                  entryObject.resource.resourceType !== resourceName
              )) ||
            (jsonContent.contained && jsonContent.contained.length > 0) ||
            (jsonContent.differential &&
              Object.keys(jsonContent.differential).length > 0);
          const hasExtension =
            jsonContent.extension && jsonContent.extension.length > 0;
          const isCollectionBundle = jsonContent.type === "collection";
          const hasIllegalId = jsonContent.id && jsonContent.id.length > 64;
          if (
            !hasIllegalId &&
            !hasExtension &&
            !includesOtherResources &&
            !isCollectionBundle
          ) {
            examplesForThisResource += 1;
            const exampleName = `${resourceName.toLowerCase()}Example${examplesForThisResource}`;
            testString += `\t test("validate ${exampleJsonFile}", () => {\n`;
            testString += `\t\t const ${exampleName} = require("../${fhirVersion}-resources/${exampleJsonFile}");\n`;
            testString += `\t\t expect(${validatorFunctionName}(${exampleName})).toBe(true);\n`;
            testString += `\t });\n\n`;
          }
        }
      }
    });
    if (examplesForThisResource !== 0) {
      testString += `});`;

      readline.clearLine(process.stdout, 0);
      readline.cursorTo(process.stdout, 0);
      process.stdout.write(
        `Current progress: [${index + 1}/${resourcesToTest.length}]`
      );
      fs.writeFileSync(`${testsDirectory}${resourceName}.js`, testString);
    }
  });
});

process.stdout.write(`\nTest file generation done.\n`);
