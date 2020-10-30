const medicationrequestValidateFunction = require("../../stu3/js/MedicationRequest");

describe("MedicationRequest", () => {
	 test("validate MedicationRequest-medrx002.json", () => {
		 const medicationrequestExample1 = require("../stu3-resources/MedicationRequest-medrx002.json");
		 expect(medicationrequestValidateFunction(medicationrequestExample1)).toBe(true);
	 });

	 test("validate MedicationRequest-medrx0308.json", () => {
		 const medicationrequestExample2 = require("../stu3-resources/MedicationRequest-medrx0308.json");
		 expect(medicationrequestValidateFunction(medicationrequestExample2)).toBe(true);
	 });

	 test("validate MedicationRequest-medrx0312.json", () => {
		 const medicationrequestExample3 = require("../stu3-resources/MedicationRequest-medrx0312.json");
		 expect(medicationrequestValidateFunction(medicationrequestExample3)).toBe(true);
	 });

	 test("validate MedicationRequest-medrx0313.json", () => {
		 const medicationrequestExample4 = require("../stu3-resources/MedicationRequest-medrx0313.json");
		 expect(medicationrequestValidateFunction(medicationrequestExample4)).toBe(true);
	 });

	 test("validate MedicationRequest-medrx0314.json", () => {
		 const medicationrequestExample5 = require("../stu3-resources/MedicationRequest-medrx0314.json");
		 expect(medicationrequestValidateFunction(medicationrequestExample5)).toBe(true);
	 });

	 test("validate MedicationRequest-medrx0320.json", () => {
		 const medicationrequestExample6 = require("../stu3-resources/MedicationRequest-medrx0320.json");
		 expect(medicationrequestValidateFunction(medicationrequestExample6)).toBe(true);
	 });

	 test("validate MedicationRequest-medrx0324.json", () => {
		 const medicationrequestExample7 = require("../stu3-resources/MedicationRequest-medrx0324.json");
		 expect(medicationrequestValidateFunction(medicationrequestExample7)).toBe(true);
	 });

	 test("validate MedicationRequest-medrx0325.json", () => {
		 const medicationrequestExample8 = require("../stu3-resources/MedicationRequest-medrx0325.json");
		 expect(medicationrequestValidateFunction(medicationrequestExample8)).toBe(true);
	 });

	 test("validate MedicationRequest-medrx0326.json", () => {
		 const medicationrequestExample9 = require("../stu3-resources/MedicationRequest-medrx0326.json");
		 expect(medicationrequestValidateFunction(medicationrequestExample9)).toBe(true);
	 });

	 test("validate MedicationRequest-medrx0327.json", () => {
		 const medicationrequestExample10 = require("../stu3-resources/MedicationRequest-medrx0327.json");
		 expect(medicationrequestValidateFunction(medicationrequestExample10)).toBe(true);
	 });

	 test("validate MedicationRequest-medrx0334.json", () => {
		 const medicationrequestExample11 = require("../stu3-resources/MedicationRequest-medrx0334.json");
		 expect(medicationrequestValidateFunction(medicationrequestExample11)).toBe(true);
	 });

	 test("validate MedicationRequest-medrx0335.json", () => {
		 const medicationrequestExample12 = require("../stu3-resources/MedicationRequest-medrx0335.json");
		 expect(medicationrequestValidateFunction(medicationrequestExample12)).toBe(true);
	 });

});