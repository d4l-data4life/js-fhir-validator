const procedureValidateFunction = require("../../stu3/js/Procedure");

describe("Procedure", () => {
	 test("validate Procedure-ambulation.json", () => {
		 const procedureExample1 = require("../stu3-resources/Procedure-ambulation.json");
		 expect(procedureValidateFunction(procedureExample1)).toBe(true);
	 });

	 test("validate Procedure-appendectomy-narrative.json", () => {
		 const procedureExample2 = require("../stu3-resources/Procedure-appendectomy-narrative.json");
		 expect(procedureValidateFunction(procedureExample2)).toBe(true);
	 });

	 test("validate Procedure-biopsy.json", () => {
		 const procedureExample3 = require("../stu3-resources/Procedure-biopsy.json");
		 expect(procedureValidateFunction(procedureExample3)).toBe(true);
	 });

	 test("validate Procedure-colon-biopsy.json", () => {
		 const procedureExample4 = require("../stu3-resources/Procedure-colon-biopsy.json");
		 expect(procedureValidateFunction(procedureExample4)).toBe(true);
	 });

	 test("validate Procedure-colonoscopy.json", () => {
		 const procedureExample5 = require("../stu3-resources/Procedure-colonoscopy.json");
		 expect(procedureValidateFunction(procedureExample5)).toBe(true);
	 });

	 test("validate Procedure-education.json", () => {
		 const procedureExample6 = require("../stu3-resources/Procedure-education.json");
		 expect(procedureValidateFunction(procedureExample6)).toBe(true);
	 });

	 test("validate Procedure-example-implant.json", () => {
		 const procedureExample7 = require("../stu3-resources/Procedure-example-implant.json");
		 expect(procedureValidateFunction(procedureExample7)).toBe(true);
	 });

	 test("validate Procedure-example.json", () => {
		 const procedureExample8 = require("../stu3-resources/Procedure-example.json");
		 expect(procedureValidateFunction(procedureExample8)).toBe(true);
	 });

	 test("validate Procedure-f001.json", () => {
		 const procedureExample9 = require("../stu3-resources/Procedure-f001.json");
		 expect(procedureValidateFunction(procedureExample9)).toBe(true);
	 });

	 test("validate Procedure-f002.json", () => {
		 const procedureExample10 = require("../stu3-resources/Procedure-f002.json");
		 expect(procedureValidateFunction(procedureExample10)).toBe(true);
	 });

	 test("validate Procedure-f003.json", () => {
		 const procedureExample11 = require("../stu3-resources/Procedure-f003.json");
		 expect(procedureValidateFunction(procedureExample11)).toBe(true);
	 });

	 test("validate Procedure-f004.json", () => {
		 const procedureExample12 = require("../stu3-resources/Procedure-f004.json");
		 expect(procedureValidateFunction(procedureExample12)).toBe(true);
	 });

	 test("validate Procedure-f201.json", () => {
		 const procedureExample13 = require("../stu3-resources/Procedure-f201.json");
		 expect(procedureValidateFunction(procedureExample13)).toBe(true);
	 });

	 test("validate Procedure-ob.json", () => {
		 const procedureExample14 = require("../stu3-resources/Procedure-ob.json");
		 expect(procedureValidateFunction(procedureExample14)).toBe(true);
	 });

	 test("validate Procedure-physical-therapy.json", () => {
		 const procedureExample15 = require("../stu3-resources/Procedure-physical-therapy.json");
		 expect(procedureValidateFunction(procedureExample15)).toBe(true);
	 });

});