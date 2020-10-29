const patientValidateFunction = require("../../r4/js/Patient");

describe("Patient", () => {
	 test("validate Patient-ch-example.json", () => {
		 const patientExample1 = require("../r4-resources/Patient-ch-example.json");
		 expect(patientValidateFunction(patientExample1)).toBe(true);
	 });

	 test("validate Patient-example.json", () => {
		 const patientExample2 = require("../r4-resources/Patient-example.json");
		 expect(patientValidateFunction(patientExample2)).toBe(true);
	 });

	 test("validate Patient-f001.json", () => {
		 const patientExample3 = require("../r4-resources/Patient-f001.json");
		 expect(patientValidateFunction(patientExample3)).toBe(true);
	 });

	 test("validate Patient-f201.json", () => {
		 const patientExample4 = require("../r4-resources/Patient-f201.json");
		 expect(patientValidateFunction(patientExample4)).toBe(true);
	 });

	 test("validate Patient-genetics-example1.json", () => {
		 const patientExample5 = require("../r4-resources/Patient-genetics-example1.json");
		 expect(patientValidateFunction(patientExample5)).toBe(true);
	 });

	 test("validate Patient-ihe-pcd.json", () => {
		 const patientExample6 = require("../r4-resources/Patient-ihe-pcd.json");
		 expect(patientValidateFunction(patientExample6)).toBe(true);
	 });

	 test("validate Patient-infant-mom.json", () => {
		 const patientExample7 = require("../r4-resources/Patient-infant-mom.json");
		 expect(patientValidateFunction(patientExample7)).toBe(true);
	 });

	 test("validate Patient-mom.json", () => {
		 const patientExample8 = require("../r4-resources/Patient-mom.json");
		 expect(patientValidateFunction(patientExample8)).toBe(true);
	 });

	 test("validate Patient-pat1.json", () => {
		 const patientExample9 = require("../r4-resources/Patient-pat1.json");
		 expect(patientValidateFunction(patientExample9)).toBe(true);
	 });

	 test("validate Patient-pat2.json", () => {
		 const patientExample10 = require("../r4-resources/Patient-pat2.json");
		 expect(patientValidateFunction(patientExample10)).toBe(true);
	 });

	 test("validate Patient-pat3.json", () => {
		 const patientExample11 = require("../r4-resources/Patient-pat3.json");
		 expect(patientValidateFunction(patientExample11)).toBe(true);
	 });

	 test("validate Patient-pat4.json", () => {
		 const patientExample12 = require("../r4-resources/Patient-pat4.json");
		 expect(patientValidateFunction(patientExample12)).toBe(true);
	 });

	 test("validate Patient-proband.json", () => {
		 const patientExample13 = require("../r4-resources/Patient-proband.json");
		 expect(patientValidateFunction(patientExample13)).toBe(true);
	 });

	 test("validate Patient-xcda.json", () => {
		 const patientExample14 = require("../r4-resources/Patient-xcda.json");
		 expect(patientValidateFunction(patientExample14)).toBe(true);
	 });

	 test("validate Patient-xds.json", () => {
		 const patientExample15 = require("../r4-resources/Patient-xds.json");
		 expect(patientValidateFunction(patientExample15)).toBe(true);
	 });

});