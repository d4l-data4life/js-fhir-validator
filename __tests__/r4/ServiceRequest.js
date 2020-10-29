const servicerequestValidateFunction = require("../../r4/js/ServiceRequest");

describe("ServiceRequest", () => {
	 test("validate ServiceRequest-ambulation.json", () => {
		 const servicerequestExample1 = require("../r4-resources/ServiceRequest-ambulation.json");
		 expect(servicerequestValidateFunction(servicerequestExample1)).toBe(true);
	 });

	 test("validate ServiceRequest-appendectomy-narrative.json", () => {
		 const servicerequestExample2 = require("../r4-resources/ServiceRequest-appendectomy-narrative.json");
		 expect(servicerequestValidateFunction(servicerequestExample2)).toBe(true);
	 });

	 test("validate ServiceRequest-benchpress.json", () => {
		 const servicerequestExample3 = require("../r4-resources/ServiceRequest-benchpress.json");
		 expect(servicerequestValidateFunction(servicerequestExample3)).toBe(true);
	 });

	 test("validate ServiceRequest-colon-biopsy.json", () => {
		 const servicerequestExample4 = require("../r4-resources/ServiceRequest-colon-biopsy.json");
		 expect(servicerequestValidateFunction(servicerequestExample4)).toBe(true);
	 });

	 test("validate ServiceRequest-colonoscopy.json", () => {
		 const servicerequestExample5 = require("../r4-resources/ServiceRequest-colonoscopy.json");
		 expect(servicerequestValidateFunction(servicerequestExample5)).toBe(true);
	 });

	 test("validate ServiceRequest-di.json", () => {
		 const servicerequestExample6 = require("../r4-resources/ServiceRequest-di.json");
		 expect(servicerequestValidateFunction(servicerequestExample6)).toBe(true);
	 });

	 test("validate ServiceRequest-do-not-turn.json", () => {
		 const servicerequestExample7 = require("../r4-resources/ServiceRequest-do-not-turn.json");
		 expect(servicerequestValidateFunction(servicerequestExample7)).toBe(true);
	 });

	 test("validate ServiceRequest-education.json", () => {
		 const servicerequestExample8 = require("../r4-resources/ServiceRequest-education.json");
		 expect(servicerequestValidateFunction(servicerequestExample8)).toBe(true);
	 });

	 test("validate ServiceRequest-example-implant.json", () => {
		 const servicerequestExample9 = require("../r4-resources/ServiceRequest-example-implant.json");
		 expect(servicerequestValidateFunction(servicerequestExample9)).toBe(true);
	 });

	 test("validate ServiceRequest-example-pgx.json", () => {
		 const servicerequestExample10 = require("../r4-resources/ServiceRequest-example-pgx.json");
		 expect(servicerequestValidateFunction(servicerequestExample10)).toBe(true);
	 });

	 test("validate ServiceRequest-example.json", () => {
		 const servicerequestExample11 = require("../r4-resources/ServiceRequest-example.json");
		 expect(servicerequestValidateFunction(servicerequestExample11)).toBe(true);
	 });

	 test("validate ServiceRequest-ft4.json", () => {
		 const servicerequestExample12 = require("../r4-resources/ServiceRequest-ft4.json");
		 expect(servicerequestValidateFunction(servicerequestExample12)).toBe(true);
	 });

	 test("validate ServiceRequest-myringotomy.json", () => {
		 const servicerequestExample13 = require("../r4-resources/ServiceRequest-myringotomy.json");
		 expect(servicerequestValidateFunction(servicerequestExample13)).toBe(true);
	 });

	 test("validate ServiceRequest-ob.json", () => {
		 const servicerequestExample14 = require("../r4-resources/ServiceRequest-ob.json");
		 expect(servicerequestValidateFunction(servicerequestExample14)).toBe(true);
	 });

	 test("validate ServiceRequest-og-example1.json", () => {
		 const servicerequestExample15 = require("../r4-resources/ServiceRequest-og-example1.json");
		 expect(servicerequestValidateFunction(servicerequestExample15)).toBe(true);
	 });

	 test("validate ServiceRequest-physical-therapy.json", () => {
		 const servicerequestExample16 = require("../r4-resources/ServiceRequest-physical-therapy.json");
		 expect(servicerequestValidateFunction(servicerequestExample16)).toBe(true);
	 });

	 test("validate ServiceRequest-subrequest.json", () => {
		 const servicerequestExample17 = require("../r4-resources/ServiceRequest-subrequest.json");
		 expect(servicerequestValidateFunction(servicerequestExample17)).toBe(true);
	 });

	 test("validate ServiceRequest-vent.json", () => {
		 const servicerequestExample18 = require("../r4-resources/ServiceRequest-vent.json");
		 expect(servicerequestValidateFunction(servicerequestExample18)).toBe(true);
	 });

});