const implementationguideValidateFunction = require("../../r4/js/ImplementationGuide");

describe("ImplementationGuide", () => {
	 test("validate ImplementationGuide-example.json", () => {
		 const implementationguideExample1 = require("../r4-resources/ImplementationGuide-example.json");
		 expect(implementationguideValidateFunction(implementationguideExample1)).toBe(true);
	 });

	 test("validate ImplementationGuide-fhir.json", () => {
		 const implementationguideExample2 = require("../r4-resources/ImplementationGuide-fhir.json");
		 expect(implementationguideValidateFunction(implementationguideExample2)).toBe(true);
	 });

});