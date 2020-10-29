const organizationValidateFunction = require("../../r4/js/Organization");

describe("Organization", () => {
	 test("validate Organization-1.json", () => {
		 const organizationExample1 = require("../r4-resources/Organization-1.json");
		 expect(organizationValidateFunction(organizationExample1)).toBe(true);
	 });

	 test("validate Organization-1832473e-2fe0-452d-abe9-3cdb9879522f.json", () => {
		 const organizationExample2 = require("../r4-resources/Organization-1832473e-2fe0-452d-abe9-3cdb9879522f.json");
		 expect(organizationValidateFunction(organizationExample2)).toBe(true);
	 });

	 test("validate Organization-2.16.840.1.113883.19.5.json", () => {
		 const organizationExample3 = require("../r4-resources/Organization-2.16.840.1.113883.19.5.json");
		 expect(organizationValidateFunction(organizationExample3)).toBe(true);
	 });

	 test("validate Organization-2.json", () => {
		 const organizationExample4 = require("../r4-resources/Organization-2.json");
		 expect(organizationValidateFunction(organizationExample4)).toBe(true);
	 });

	 test("validate Organization-3.json", () => {
		 const organizationExample5 = require("../r4-resources/Organization-3.json");
		 expect(organizationValidateFunction(organizationExample5)).toBe(true);
	 });

	 test("validate Organization-f001.json", () => {
		 const organizationExample6 = require("../r4-resources/Organization-f001.json");
		 expect(organizationValidateFunction(organizationExample6)).toBe(true);
	 });

	 test("validate Organization-f002.json", () => {
		 const organizationExample7 = require("../r4-resources/Organization-f002.json");
		 expect(organizationValidateFunction(organizationExample7)).toBe(true);
	 });

	 test("validate Organization-f003.json", () => {
		 const organizationExample8 = require("../r4-resources/Organization-f003.json");
		 expect(organizationValidateFunction(organizationExample8)).toBe(true);
	 });

	 test("validate Organization-f201.json", () => {
		 const organizationExample9 = require("../r4-resources/Organization-f201.json");
		 expect(organizationValidateFunction(organizationExample9)).toBe(true);
	 });

	 test("validate Organization-f203.json", () => {
		 const organizationExample10 = require("../r4-resources/Organization-f203.json");
		 expect(organizationValidateFunction(organizationExample10)).toBe(true);
	 });

	 test("validate Organization-hl7.json", () => {
		 const organizationExample11 = require("../r4-resources/Organization-hl7.json");
		 expect(organizationValidateFunction(organizationExample11)).toBe(true);
	 });

	 test("validate Organization-hl7pay.json", () => {
		 const organizationExample12 = require("../r4-resources/Organization-hl7pay.json");
		 expect(organizationValidateFunction(organizationExample12)).toBe(true);
	 });

	 test("validate Organization-mmanu.json", () => {
		 const organizationExample13 = require("../r4-resources/Organization-mmanu.json");
		 expect(organizationValidateFunction(organizationExample13)).toBe(true);
	 });

});