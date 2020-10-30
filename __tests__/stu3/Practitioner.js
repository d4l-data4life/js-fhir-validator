const practitionerValidateFunction = require("../../stu3/js/Practitioner");

describe("Practitioner", () => {
	 test("validate Practitioner-example.json", () => {
		 const practitionerExample1 = require("../stu3-resources/Practitioner-example.json");
		 expect(practitionerValidateFunction(practitionerExample1)).toBe(true);
	 });

	 test("validate Practitioner-f001.json", () => {
		 const practitionerExample2 = require("../stu3-resources/Practitioner-f001.json");
		 expect(practitionerValidateFunction(practitionerExample2)).toBe(true);
	 });

	 test("validate Practitioner-f002.json", () => {
		 const practitionerExample3 = require("../stu3-resources/Practitioner-f002.json");
		 expect(practitionerValidateFunction(practitionerExample3)).toBe(true);
	 });

	 test("validate Practitioner-f003.json", () => {
		 const practitionerExample4 = require("../stu3-resources/Practitioner-f003.json");
		 expect(practitionerValidateFunction(practitionerExample4)).toBe(true);
	 });

	 test("validate Practitioner-f004.json", () => {
		 const practitionerExample5 = require("../stu3-resources/Practitioner-f004.json");
		 expect(practitionerValidateFunction(practitionerExample5)).toBe(true);
	 });

	 test("validate Practitioner-f005.json", () => {
		 const practitionerExample6 = require("../stu3-resources/Practitioner-f005.json");
		 expect(practitionerValidateFunction(practitionerExample6)).toBe(true);
	 });

	 test("validate Practitioner-f006.json", () => {
		 const practitionerExample7 = require("../stu3-resources/Practitioner-f006.json");
		 expect(practitionerValidateFunction(practitionerExample7)).toBe(true);
	 });

	 test("validate Practitioner-f007.json", () => {
		 const practitionerExample8 = require("../stu3-resources/Practitioner-f007.json");
		 expect(practitionerValidateFunction(practitionerExample8)).toBe(true);
	 });

	 test("validate Practitioner-f201.json", () => {
		 const practitionerExample9 = require("../stu3-resources/Practitioner-f201.json");
		 expect(practitionerValidateFunction(practitionerExample9)).toBe(true);
	 });

	 test("validate Practitioner-f202.json", () => {
		 const practitionerExample10 = require("../stu3-resources/Practitioner-f202.json");
		 expect(practitionerValidateFunction(practitionerExample10)).toBe(true);
	 });

	 test("validate Practitioner-f203.json", () => {
		 const practitionerExample11 = require("../stu3-resources/Practitioner-f203.json");
		 expect(practitionerValidateFunction(practitionerExample11)).toBe(true);
	 });

	 test("validate Practitioner-f204.json", () => {
		 const practitionerExample12 = require("../stu3-resources/Practitioner-f204.json");
		 expect(practitionerValidateFunction(practitionerExample12)).toBe(true);
	 });

	 test("validate Practitioner-xcda-author.json", () => {
		 const practitionerExample13 = require("../stu3-resources/Practitioner-xcda-author.json");
		 expect(practitionerValidateFunction(practitionerExample13)).toBe(true);
	 });

	 test("validate Practitioner-xcda1.json", () => {
		 const practitionerExample14 = require("../stu3-resources/Practitioner-xcda1.json");
		 expect(practitionerValidateFunction(practitionerExample14)).toBe(true);
	 });

});