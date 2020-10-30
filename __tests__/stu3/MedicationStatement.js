const medicationstatementValidateFunction = require("../../stu3/js/MedicationStatement");

describe("MedicationStatement", () => {
	 test("validate MedicationStatement-example003.json", () => {
		 const medicationstatementExample1 = require("../stu3-resources/MedicationStatement-example003.json");
		 expect(medicationstatementValidateFunction(medicationstatementExample1)).toBe(true);
	 });

	 test("validate MedicationStatement-example004.json", () => {
		 const medicationstatementExample2 = require("../stu3-resources/MedicationStatement-example004.json");
		 expect(medicationstatementValidateFunction(medicationstatementExample2)).toBe(true);
	 });

	 test("validate MedicationStatement-example005.json", () => {
		 const medicationstatementExample3 = require("../stu3-resources/MedicationStatement-example005.json");
		 expect(medicationstatementValidateFunction(medicationstatementExample3)).toBe(true);
	 });

	 test("validate MedicationStatement-example006.json", () => {
		 const medicationstatementExample4 = require("../stu3-resources/MedicationStatement-example006.json");
		 expect(medicationstatementValidateFunction(medicationstatementExample4)).toBe(true);
	 });

});