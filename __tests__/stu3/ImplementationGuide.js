const implementationguideValidateFunction = require("../../stu3/js/ImplementationGuide");

describe("ImplementationGuide", () => {
	 test("validate ImplementationGuide-example.json", () => {
		 const implementationguideExample1 = require("../stu3-resources/ImplementationGuide-example.json");
		 expect(implementationguideValidateFunction(implementationguideExample1)).toBe(true);
	 });

	 test("validate ImplementationGuide-fhir.json", () => {
		 const implementationguideExample2 = require("../stu3-resources/ImplementationGuide-fhir.json");
		 expect(implementationguideValidateFunction(implementationguideExample2)).toBe(true);
	 });

});