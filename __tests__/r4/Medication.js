const medicationValidateFunction = require("../../r4/js/Medication");

describe("Medication", () => {
	 test("validate Medication-med0313.json", () => {
		 const medicationExample1 = require("../r4-resources/Medication-med0313.json");
		 expect(medicationValidateFunction(medicationExample1)).toBe(true);
	 });

	 test("validate Medication-med0314.json", () => {
		 const medicationExample2 = require("../r4-resources/Medication-med0314.json");
		 expect(medicationValidateFunction(medicationExample2)).toBe(true);
	 });

	 test("validate Medication-med0315.json", () => {
		 const medicationExample3 = require("../r4-resources/Medication-med0315.json");
		 expect(medicationValidateFunction(medicationExample3)).toBe(true);
	 });

	 test("validate Medication-med0317.json", () => {
		 const medicationExample4 = require("../r4-resources/Medication-med0317.json");
		 expect(medicationValidateFunction(medicationExample4)).toBe(true);
	 });

	 test("validate Medication-med0318.json", () => {
		 const medicationExample5 = require("../r4-resources/Medication-med0318.json");
		 expect(medicationValidateFunction(medicationExample5)).toBe(true);
	 });

	 test("validate Medication-med0319.json", () => {
		 const medicationExample6 = require("../r4-resources/Medication-med0319.json");
		 expect(medicationValidateFunction(medicationExample6)).toBe(true);
	 });

	 test("validate Medication-medicationexample1.json", () => {
		 const medicationExample7 = require("../r4-resources/Medication-medicationexample1.json");
		 expect(medicationValidateFunction(medicationExample7)).toBe(true);
	 });

});