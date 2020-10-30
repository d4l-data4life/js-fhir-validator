const diagnosticreportValidateFunction = require("../../stu3/js/DiagnosticReport");

describe("DiagnosticReport", () => {
	 test("validate DiagnosticReport-102.json", () => {
		 const diagnosticreportExample1 = require("../stu3-resources/DiagnosticReport-102.json");
		 expect(diagnosticreportValidateFunction(diagnosticreportExample1)).toBe(true);
	 });

	 test("validate DiagnosticReport-example-pgx.json", () => {
		 const diagnosticreportExample2 = require("../stu3-resources/DiagnosticReport-example-pgx.json");
		 expect(diagnosticreportValidateFunction(diagnosticreportExample2)).toBe(true);
	 });

	 test("validate DiagnosticReport-f201.json", () => {
		 const diagnosticreportExample3 = require("../stu3-resources/DiagnosticReport-f201.json");
		 expect(diagnosticreportValidateFunction(diagnosticreportExample3)).toBe(true);
	 });

	 test("validate DiagnosticReport-gingival-mass.json", () => {
		 const diagnosticreportExample4 = require("../stu3-resources/DiagnosticReport-gingival-mass.json");
		 expect(diagnosticreportValidateFunction(diagnosticreportExample4)).toBe(true);
	 });

	 test("validate DiagnosticReport-pap.json", () => {
		 const diagnosticreportExample5 = require("../stu3-resources/DiagnosticReport-pap.json");
		 expect(diagnosticreportValidateFunction(diagnosticreportExample5)).toBe(true);
	 });

	 test("validate DiagnosticReport-ultrasound.json", () => {
		 const diagnosticreportExample6 = require("../stu3-resources/DiagnosticReport-ultrasound.json");
		 expect(diagnosticreportValidateFunction(diagnosticreportExample6)).toBe(true);
	 });

});