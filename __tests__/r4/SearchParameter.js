const searchparameterValidateFunction = require("../../r4/js/SearchParameter");

describe("SearchParameter", () => {
	 test("validate SearchParameter-codesystem-extensions-CodeSystem-author.json", () => {
		 const searchparameterExample1 = require("../r4-resources/SearchParameter-codesystem-extensions-CodeSystem-author.json");
		 expect(searchparameterValidateFunction(searchparameterExample1)).toBe(true);
	 });

	 test("validate SearchParameter-codesystem-extensions-CodeSystem-effective.json", () => {
		 const searchparameterExample2 = require("../r4-resources/SearchParameter-codesystem-extensions-CodeSystem-effective.json");
		 expect(searchparameterValidateFunction(searchparameterExample2)).toBe(true);
	 });

	 test("validate SearchParameter-codesystem-extensions-CodeSystem-end.json", () => {
		 const searchparameterExample3 = require("../r4-resources/SearchParameter-codesystem-extensions-CodeSystem-end.json");
		 expect(searchparameterValidateFunction(searchparameterExample3)).toBe(true);
	 });

	 test("validate SearchParameter-codesystem-extensions-CodeSystem-keyword.json", () => {
		 const searchparameterExample4 = require("../r4-resources/SearchParameter-codesystem-extensions-CodeSystem-keyword.json");
		 expect(searchparameterValidateFunction(searchparameterExample4)).toBe(true);
	 });

	 test("validate SearchParameter-codesystem-extensions-CodeSystem-workflow.json", () => {
		 const searchparameterExample5 = require("../r4-resources/SearchParameter-codesystem-extensions-CodeSystem-workflow.json");
		 expect(searchparameterValidateFunction(searchparameterExample5)).toBe(true);
	 });

	 test("validate SearchParameter-device-extensions-Device-din.json", () => {
		 const searchparameterExample6 = require("../r4-resources/SearchParameter-device-extensions-Device-din.json");
		 expect(searchparameterValidateFunction(searchparameterExample6)).toBe(true);
	 });

	 test("validate SearchParameter-diagnosticreport-genetic-DiagnosticReport-assessed-condition.json", () => {
		 const searchparameterExample7 = require("../r4-resources/SearchParameter-diagnosticreport-genetic-DiagnosticReport-assessed-condition.json");
		 expect(searchparameterValidateFunction(searchparameterExample7)).toBe(true);
	 });

	 test("validate SearchParameter-example-extension.json", () => {
		 const searchparameterExample8 = require("../r4-resources/SearchParameter-example-extension.json");
		 expect(searchparameterValidateFunction(searchparameterExample8)).toBe(true);
	 });

	 test("validate SearchParameter-example-reference.json", () => {
		 const searchparameterExample9 = require("../r4-resources/SearchParameter-example-reference.json");
		 expect(searchparameterValidateFunction(searchparameterExample9)).toBe(true);
	 });

	 test("validate SearchParameter-example.json", () => {
		 const searchparameterExample10 = require("../r4-resources/SearchParameter-example.json");
		 expect(searchparameterValidateFunction(searchparameterExample10)).toBe(true);
	 });

	 test("validate SearchParameter-filter.json", () => {
		 const searchparameterExample11 = require("../r4-resources/SearchParameter-filter.json");
		 expect(searchparameterValidateFunction(searchparameterExample11)).toBe(true);
	 });

	 test("validate SearchParameter-observation-genetic-Observation-amino-acid-change.json", () => {
		 const searchparameterExample12 = require("../r4-resources/SearchParameter-observation-genetic-Observation-amino-acid-change.json");
		 expect(searchparameterValidateFunction(searchparameterExample12)).toBe(true);
	 });

	 test("validate SearchParameter-observation-genetic-Observation-dna-variant.json", () => {
		 const searchparameterExample13 = require("../r4-resources/SearchParameter-observation-genetic-Observation-dna-variant.json");
		 expect(searchparameterValidateFunction(searchparameterExample13)).toBe(true);
	 });

	 test("validate SearchParameter-observation-genetic-Observation-gene-amino-acid-change.json", () => {
		 const searchparameterExample14 = require("../r4-resources/SearchParameter-observation-genetic-Observation-gene-amino-acid-change.json");
		 expect(searchparameterValidateFunction(searchparameterExample14)).toBe(true);
	 });

	 test("validate SearchParameter-observation-genetic-Observation-gene-dnavariant.json", () => {
		 const searchparameterExample15 = require("../r4-resources/SearchParameter-observation-genetic-Observation-gene-dnavariant.json");
		 expect(searchparameterValidateFunction(searchparameterExample15)).toBe(true);
	 });

	 test("validate SearchParameter-observation-genetic-Observation-gene-identifier.json", () => {
		 const searchparameterExample16 = require("../r4-resources/SearchParameter-observation-genetic-Observation-gene-identifier.json");
		 expect(searchparameterValidateFunction(searchparameterExample16)).toBe(true);
	 });

	 test("validate SearchParameter-patient-extensions-Patient-age.json", () => {
		 const searchparameterExample17 = require("../r4-resources/SearchParameter-patient-extensions-Patient-age.json");
		 expect(searchparameterValidateFunction(searchparameterExample17)).toBe(true);
	 });

	 test("validate SearchParameter-patient-extensions-Patient-birthOrderBoolean.json", () => {
		 const searchparameterExample18 = require("../r4-resources/SearchParameter-patient-extensions-Patient-birthOrderBoolean.json");
		 expect(searchparameterValidateFunction(searchparameterExample18)).toBe(true);
	 });

	 test("validate SearchParameter-patient-extensions-Patient-mothersMaidenName.json", () => {
		 const searchparameterExample19 = require("../r4-resources/SearchParameter-patient-extensions-Patient-mothersMaidenName.json");
		 expect(searchparameterValidateFunction(searchparameterExample19)).toBe(true);
	 });

	 test("validate SearchParameter-valueset-extensions-ValueSet-author.json", () => {
		 const searchparameterExample20 = require("../r4-resources/SearchParameter-valueset-extensions-ValueSet-author.json");
		 expect(searchparameterValidateFunction(searchparameterExample20)).toBe(true);
	 });

	 test("validate SearchParameter-valueset-extensions-ValueSet-effective.json", () => {
		 const searchparameterExample21 = require("../r4-resources/SearchParameter-valueset-extensions-ValueSet-effective.json");
		 expect(searchparameterValidateFunction(searchparameterExample21)).toBe(true);
	 });

	 test("validate SearchParameter-valueset-extensions-ValueSet-end.json", () => {
		 const searchparameterExample22 = require("../r4-resources/SearchParameter-valueset-extensions-ValueSet-end.json");
		 expect(searchparameterValidateFunction(searchparameterExample22)).toBe(true);
	 });

	 test("validate SearchParameter-valueset-extensions-ValueSet-keyword.json", () => {
		 const searchparameterExample23 = require("../r4-resources/SearchParameter-valueset-extensions-ValueSet-keyword.json");
		 expect(searchparameterValidateFunction(searchparameterExample23)).toBe(true);
	 });

	 test("validate SearchParameter-valueset-extensions-ValueSet-workflow.json", () => {
		 const searchparameterExample24 = require("../r4-resources/SearchParameter-valueset-extensions-ValueSet-workflow.json");
		 expect(searchparameterValidateFunction(searchparameterExample24)).toBe(true);
	 });

});