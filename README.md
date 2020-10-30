# JS-FHIR-Validator

Runtime validation for FHIR resources. Exposes resourcetype-specific validators (strongly recommended) or one overall validation function (FHIR 4.0.1 only, caution advised).

## Supported FHIR versions

This library currently supports FHIR versions 4.0.01 (R4) and 3.0.1 (STU3).

## Usage
Built on top of [AJV's](https://ajv.js.org/) command-line based [pre-compilation feature](https://github.com/ajv-validator/ajv-cli#compile-schemas). Every module is a `validate` function that can be directly called and returns true if the object passes.

### Example

`validateUserSuppliedDiagnosticReport(diagnosticReport) => {
  import('js-fhir-validator/r4/js/diagnosticreport').then(validatorFunction => {
       // we suggest caching the function in case you want to validate the same resource type multiple times
       const validationResult = validationFunction(diagnosticReport);
       // validationResult is either true or false
       if (validationFunction.errors) { // errors are reset after every call
         console.log(...)
       }
       })
}`

### Finding errors
The exported module is both a function that can be called as an example as well as an object that contains the JSON schema and the errors collection from its latest call. To read and react to the latest errors, check this property right after the call.

## Constraints

Many FHIR resources have the ability to include other resources - by way of `contain`, by being a `Bundle` or other collection-like resource or otherwise referencing them. These resources are not supported because it would require every validation function to possibly load every other validation function.

If you use any resources that include other resources in this way, we suggest you validate a copy of your originall resource without these included and then recursively validate all included resources, like so (using [lodash](https://lodash.com/docs/4.17.15) functions `cloneDeep` and `omit):

` const containedResources = cloneDeep(resource.contained);
     let resourceToValidate = resource;
     if (containedResources && containedResources.length) {
       resourceToValidate = omit(resource, ['contained']);
       await Promise.all(
         containedResources.map(containedResource => this.validate(containedResource))
       );
     }`


**Extensions** are not supported.


## File size considerations
The generated validation functions are huge - between 2 and 4 megabytes before minification! This means that there is a significant performance impact to loading and parsing several of these packages. We strongly urge you to consider means of tree-shaking or asynchronous loading for the validation imports.

### When should I use the index.js entry point?

Once you need to validate more _than ten different resource types per session_, you can import the repository's entry point (index.js) instead.

## Developer hints

### NPM commands

- `test` runs all tests
- `build` consecutively runs the script to build per-resource JSON files and then per-resource generator scripts for Fhir version R4,
- `build:test` generates the test files for both STU3 and R4 resources, matching per-resource validation scripts and the official HL7 FHIR examples
- `build:index` generates single-file validation script index.js
- `build:stu3` runs the `build` script for the STU3 resources
- `build:r4` runs the `build` script for the R4 resources, it's an alias for the standard `build` command
- `build-json-files` executes the script to build JSON schema files per resource. Called by `build`, takes `stu3` or `r4` as a parameter
- `generate-validator-scripts` executes the script to build JS validation files per resource using `ajv`. Called by `build`, takes `stu3` or `r4` as a parameter

## Frequently asked Questions

Why should I use this over a FHIR json file that AJV parses at runtime?

Indeed that is a very straightforward way to use a JSON-Schema based validation, and the way AJV is used most of the time. It would even make it possible to just have one FHIR.json file for all the resources!

The downside: it requires you to enable `unsafe-eval` in your Consent Security Policies, which is a deal-breaker for many environments and browser default settings.

Why do you not transpile the code to something ES6-friendly with lebab?

Shoutout to lebab, it's a great project! However, using only the "safe" transformations doesn't change much in the generated functions, and using the unsafe ones is, well, unsafe.
