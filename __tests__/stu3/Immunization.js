const immunizationValidateFunction = require("../../stu3/js/Immunization");

describe("Immunization", () => {
	 test("validate Immunization-example.json", () => {
		 const immunizationExample1 = require("../stu3-resources/Immunization-example.json");
		 expect(immunizationValidateFunction(immunizationExample1)).toBe(true);
	 });

	 test("validate Immunization-historical.json", () => {
		 const immunizationExample2 = require("../stu3-resources/Immunization-historical.json");
		 expect(immunizationValidateFunction(immunizationExample2)).toBe(true);
	 });

	 test("validate Immunization-notGiven.json", () => {
		 const immunizationExample3 = require("../stu3-resources/Immunization-notGiven.json");
		 expect(immunizationValidateFunction(immunizationExample3)).toBe(true);
	 });

});