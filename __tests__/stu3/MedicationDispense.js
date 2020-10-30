const medicationdispenseValidateFunction = require("../../stu3/js/MedicationDispense");

describe("MedicationDispense", () => {
	 test("validate MedicationDispense-meddisp0307.json", () => {
		 const medicationdispenseExample1 = require("../stu3-resources/MedicationDispense-meddisp0307.json");
		 expect(medicationdispenseValidateFunction(medicationdispenseExample1)).toBe(true);
	 });

	 test("validate MedicationDispense-meddisp0311.json", () => {
		 const medicationdispenseExample2 = require("../stu3-resources/MedicationDispense-meddisp0311.json");
		 expect(medicationdispenseValidateFunction(medicationdispenseExample2)).toBe(true);
	 });

	 test("validate MedicationDispense-meddisp0316.json", () => {
		 const medicationdispenseExample3 = require("../stu3-resources/MedicationDispense-meddisp0316.json");
		 expect(medicationdispenseValidateFunction(medicationdispenseExample3)).toBe(true);
	 });

	 test("validate MedicationDispense-meddisp0318.json", () => {
		 const medicationdispenseExample4 = require("../stu3-resources/MedicationDispense-meddisp0318.json");
		 expect(medicationdispenseValidateFunction(medicationdispenseExample4)).toBe(true);
	 });

	 test("validate MedicationDispense-meddisp0321.json", () => {
		 const medicationdispenseExample5 = require("../stu3-resources/MedicationDispense-meddisp0321.json");
		 expect(medicationdispenseValidateFunction(medicationdispenseExample5)).toBe(true);
	 });

	 test("validate MedicationDispense-meddisp0322.json", () => {
		 const medicationdispenseExample6 = require("../stu3-resources/MedicationDispense-meddisp0322.json");
		 expect(medicationdispenseValidateFunction(medicationdispenseExample6)).toBe(true);
	 });

	 test("validate MedicationDispense-meddisp0324.json", () => {
		 const medicationdispenseExample7 = require("../stu3-resources/MedicationDispense-meddisp0324.json");
		 expect(medicationdispenseValidateFunction(medicationdispenseExample7)).toBe(true);
	 });

	 test("validate MedicationDispense-meddisp0325.json", () => {
		 const medicationdispenseExample8 = require("../stu3-resources/MedicationDispense-meddisp0325.json");
		 expect(medicationdispenseValidateFunction(medicationdispenseExample8)).toBe(true);
	 });

	 test("validate MedicationDispense-meddisp0326.json", () => {
		 const medicationdispenseExample9 = require("../stu3-resources/MedicationDispense-meddisp0326.json");
		 expect(medicationdispenseValidateFunction(medicationdispenseExample9)).toBe(true);
	 });

	 test("validate MedicationDispense-meddisp0327.json", () => {
		 const medicationdispenseExample10 = require("../stu3-resources/MedicationDispense-meddisp0327.json");
		 expect(medicationdispenseValidateFunction(medicationdispenseExample10)).toBe(true);
	 });

	 test("validate MedicationDispense-meddisp0328.json", () => {
		 const medicationdispenseExample11 = require("../stu3-resources/MedicationDispense-meddisp0328.json");
		 expect(medicationdispenseValidateFunction(medicationdispenseExample11)).toBe(true);
	 });

});