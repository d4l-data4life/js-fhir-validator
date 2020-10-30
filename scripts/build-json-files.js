const fs = require("fs");

const FHIR_BASIC_DEFINITIONS = {
  stu3: [
    "DomainResource",
    "Element",
    "Extension",
    "BackboneElement",
    "Narrative",
    "Annotation",
    "Attachment",
    "Identifier",
    "CodeableConcept",
    "Coding",
    "Quantity",
    "Duration",
    "Distance",
    "Count",
    "Money",
    "Age",
    "Range",
    "Period",
    "Ratio",
    "Reference",
    "SampledData",
    "Signature",
    "HumanName",
    "Address",
    "ContactPoint",
    "Timing",
    "Timing_Repeat",
    "Meta",
    "ElementDefinition",
    "ElementDefinition_Slicing",
    "ElementDefinition_Discriminator",
    "ElementDefinition_Base",
    "ElementDefinition_Type",
    "ElementDefinition_Example",
    "ElementDefinition_Constraint",
    "ElementDefinition_Binding",
    "ElementDefinition_Mapping",
    "ContactDetail",
    "Contributor",
    "Dosage",
    "RelatedArtifact",
    "UsageContext",
    "DataRequirement",
    "DataRequirement_CodeFilter",
    "DataRequirement_DateFilter",
    "ParameterDefinition",
    "TriggerDefinition",
    "Resource",
    "ResourceList"
  ],
  r4: [
    "ResourceList",
    "base64Binary",
    "boolean",
    "canonical",
    "code",
    "date",
    "dateTime",
    "decimal",
    "id",
    "instant",
    "integer",
    "markdown",
    "oid",
    "positiveInt",
    "string",
    "time",
    "unsignedInt",
    "uri",
    "url",
    "uuid",
    "xhtml",
    "Element",
    "Extension",
    "Narrative",
    "Annotation",
    "Attachment",
    "Identifier",
    "CodeableConcept",
    "Coding",
    "Quantity",
    "Duration",
    "Distance",
    "Count",
    "Money",
    "Age",
    "Range",
    "Period",
    "Ratio",
    "Reference",
    "SampledData",
    "Signature",
    "HumanName",
    "Address",
    "ContactPoint",
    "Timing",
    "Timing_Repeat",
    "Meta",
    "ContactDetail",
    "Contributor",
    "DataRequirement",
    "DataRequirement_CodeFilter",
    "DataRequirement_DateFilter",
    "DataRequirement_Sort",
    "ParameterDefinition",
    "RelatedArtifact",
    "TriggerDefinition",
    "UsageContext",
    "Dosage",
    "Dosage_DoseAndRate",
    "Population",
    "ProductShelfLife",
    "ProdCharacteristic",
    "MarketingStatus",
    "SubstanceAmount",
    "SubstanceAmount_ReferenceRange",
    "Expression",
    "ElementDefinition",
    "ElementDefinition_Slicing",
    "ElementDefinition_Discriminator",
    "ElementDefinition_Base",
    "ElementDefinition_Type",
    "ElementDefinition_Example",
    "ElementDefinition_Constraint",
    "ElementDefinition_Binding",
    "ElementDefinition_Mapping"
  ]
};

const fhirVersion = process.argv.slice(2).includes("stu3") ? "stu3" : "r4";
const fhirJson =
  fhirVersion === "r4"
    ? require("../fhir.schema.v401.json")
    : require("../fhir.schema.v301.json");

const resourceTypes = Object.keys(fhirJson.definitions).filter(
  type => !type.includes("_")
);
const jsonDirectory = `${__dirname}/../${fhirVersion}/json/`;

process.stdout.write(
  `Generating JSON schema files for ${fhirVersion} resources\n`
);

resourceTypes.forEach((resourceType, index) => {
  const newJsonForThisType = JSON.parse(JSON.stringify(fhirJson));
  if (newJsonForThisType.discriminator) {
    Object.keys(newJsonForThisType.discriminator.mapping).forEach(
      thisMapping => {
        if (thisMapping !== resourceType) {
          // remove other mappings
          delete newJsonForThisType.discriminator.mapping[thisMapping];
        }
      }
    );
  }

  const ref = `#/definitions/${resourceType}`;
  newJsonForThisType.oneOf = [{ $ref: ref }];
  newJsonForThisType.definitions.ResourceList.oneOf = [{ $ref: ref }];
  delete newJsonForThisType.definitions.ResourceList.anyOf;

  // remove other definitions (but keep _ and non-mapped ones)
  Object.keys(newJsonForThisType.definitions).forEach(definition => {
    if (
      !FHIR_BASIC_DEFINITIONS[fhirVersion].includes(definition) &&
      definition !== resourceType &&
      !definition.includes(`${resourceType}_`)
    ) {
      delete newJsonForThisType.definitions[definition];
    }
  });

  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(
    `Current progress: [${index + 1}/${resourceTypes.length}]`
  );

  if (!fs.existsSync(jsonDirectory)) {
    fs.mkdirSync(jsonDirectory, { recursive: true });
  }
  fs.writeFileSync(
    `${jsonDirectory}${resourceType}.json`,
    JSON.stringify(newJsonForThisType, null, 2)
  );

  if (index === resourceTypes.length - 1) {
    process.stdout.write(`\nJSON schema generation done.\n`);
  }
});
