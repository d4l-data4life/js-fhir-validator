const fs = require("fs");
const { execSync } = require("child_process");

const fhirVersion = process.argv.slice(2).includes("stu3") ? "stu3" : "r4";
const jsDirectory = `${__dirname}/../${fhirVersion}/js/`;
const jsonDirectory = `${__dirname}/../${fhirVersion}/json/`;

if (!fs.existsSync(jsDirectory)) {
  fs.mkdirSync(jsDirectory, { recursive: true });
}

process.stdout.write(`Generating validation scripts for ${fhirVersion} files\n`);

fs.readdir(jsonDirectory, (err, files) => {
  files.forEach((file, index) => {
    const jsFileName = file.replace("json", "js");

    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Current progress: [${index + 1}/${files.length}]`);

    execSync(
      `npx ajv compile -s ${jsonDirectory}${file} -o ${jsDirectory}${jsFileName}`
    );
  });
});

process.stdout.write(`\nValidation script generation done.\n`);
