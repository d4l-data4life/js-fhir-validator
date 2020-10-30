const procedurerequestValidateFunction = require("../../stu3/js/ProcedureRequest");

describe("ProcedureRequest", () => {
	 test("validate ProcedureRequest-ambulation.json", () => {
		 const procedurerequestExample1 = require("../stu3-resources/ProcedureRequest-ambulation.json");
		 expect(procedurerequestValidateFunction(procedurerequestExample1)).toBe(true);
	 });

	 test("validate ProcedureRequest-appendectomy-narrative.json", () => {
		 const procedurerequestExample2 = require("../stu3-resources/ProcedureRequest-appendectomy-narrative.json");
		 expect(procedurerequestValidateFunction(procedurerequestExample2)).toBe(true);
	 });

	 test("validate ProcedureRequest-benchpress.json", () => {
		 const procedurerequestExample3 = require("../stu3-resources/ProcedureRequest-benchpress.json");
		 expect(procedurerequestValidateFunction(procedurerequestExample3)).toBe(true);
	 });

	 test("validate ProcedureRequest-colon-biopsy.json", () => {
		 const procedurerequestExample4 = require("../stu3-resources/ProcedureRequest-colon-biopsy.json");
		 expect(procedurerequestValidateFunction(procedurerequestExample4)).toBe(true);
	 });

	 test("validate ProcedureRequest-colonoscopy.json", () => {
		 const procedurerequestExample5 = require("../stu3-resources/ProcedureRequest-colonoscopy.json");
		 expect(procedurerequestValidateFunction(procedurerequestExample5)).toBe(true);
	 });

	 test("validate ProcedureRequest-di.json", () => {
		 const procedurerequestExample6 = require("../stu3-resources/ProcedureRequest-di.json");
		 expect(procedurerequestValidateFunction(procedurerequestExample6)).toBe(true);
	 });

	 test("validate ProcedureRequest-do-not-turn.json", () => {
		 const procedurerequestExample7 = require("../stu3-resources/ProcedureRequest-do-not-turn.json");
		 expect(procedurerequestValidateFunction(procedurerequestExample7)).toBe(true);
	 });

	 test("validate ProcedureRequest-education.json", () => {
		 const procedurerequestExample8 = require("../stu3-resources/ProcedureRequest-education.json");
		 expect(procedurerequestValidateFunction(procedurerequestExample8)).toBe(true);
	 });

	 test("validate ProcedureRequest-example-implant.json", () => {
		 const procedurerequestExample9 = require("../stu3-resources/ProcedureRequest-example-implant.json");
		 expect(procedurerequestValidateFunction(procedurerequestExample9)).toBe(true);
	 });

	 test("validate ProcedureRequest-example-pgx.json", () => {
		 const procedurerequestExample10 = require("../stu3-resources/ProcedureRequest-example-pgx.json");
		 expect(procedurerequestValidateFunction(procedurerequestExample10)).toBe(true);
	 });

	 test("validate ProcedureRequest-example.json", () => {
		 const procedurerequestExample11 = require("../stu3-resources/ProcedureRequest-example.json");
		 expect(procedurerequestValidateFunction(procedurerequestExample11)).toBe(true);
	 });

	 test("validate ProcedureRequest-ft4.json", () => {
		 const procedurerequestExample12 = require("../stu3-resources/ProcedureRequest-ft4.json");
		 expect(procedurerequestValidateFunction(procedurerequestExample12)).toBe(true);
	 });

	 test("validate ProcedureRequest-ob.json", () => {
		 const procedurerequestExample13 = require("../stu3-resources/ProcedureRequest-ob.json");
		 expect(procedurerequestValidateFunction(procedurerequestExample13)).toBe(true);
	 });

	 test("validate ProcedureRequest-og-example1.json", () => {
		 const procedurerequestExample14 = require("../stu3-resources/ProcedureRequest-og-example1.json");
		 expect(procedurerequestValidateFunction(procedurerequestExample14)).toBe(true);
	 });

	 test("validate ProcedureRequest-physical-therapy.json", () => {
		 const procedurerequestExample15 = require("../stu3-resources/ProcedureRequest-physical-therapy.json");
		 expect(procedurerequestValidateFunction(procedurerequestExample15)).toBe(true);
	 });

	 test("validate ProcedureRequest-subrequest.json", () => {
		 const procedurerequestExample16 = require("../stu3-resources/ProcedureRequest-subrequest.json");
		 expect(procedurerequestValidateFunction(procedurerequestExample16)).toBe(true);
	 });

});