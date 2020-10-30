const compartmentdefinitionValidateFunction = require("../../stu3/js/CompartmentDefinition");

describe("CompartmentDefinition", () => {
	 test("validate CompartmentDefinition-device.json", () => {
		 const compartmentdefinitionExample1 = require("../stu3-resources/CompartmentDefinition-device.json");
		 expect(compartmentdefinitionValidateFunction(compartmentdefinitionExample1)).toBe(true);
	 });

	 test("validate CompartmentDefinition-encounter.json", () => {
		 const compartmentdefinitionExample2 = require("../stu3-resources/CompartmentDefinition-encounter.json");
		 expect(compartmentdefinitionValidateFunction(compartmentdefinitionExample2)).toBe(true);
	 });

	 test("validate CompartmentDefinition-example.json", () => {
		 const compartmentdefinitionExample3 = require("../stu3-resources/CompartmentDefinition-example.json");
		 expect(compartmentdefinitionValidateFunction(compartmentdefinitionExample3)).toBe(true);
	 });

	 test("validate CompartmentDefinition-patient.json", () => {
		 const compartmentdefinitionExample4 = require("../stu3-resources/CompartmentDefinition-patient.json");
		 expect(compartmentdefinitionValidateFunction(compartmentdefinitionExample4)).toBe(true);
	 });

	 test("validate CompartmentDefinition-practitioner.json", () => {
		 const compartmentdefinitionExample5 = require("../stu3-resources/CompartmentDefinition-practitioner.json");
		 expect(compartmentdefinitionValidateFunction(compartmentdefinitionExample5)).toBe(true);
	 });

	 test("validate CompartmentDefinition-relatedPerson.json", () => {
		 const compartmentdefinitionExample6 = require("../stu3-resources/CompartmentDefinition-relatedPerson.json");
		 expect(compartmentdefinitionValidateFunction(compartmentdefinitionExample6)).toBe(true);
	 });

});