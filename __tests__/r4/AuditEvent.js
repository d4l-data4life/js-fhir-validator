const auditeventValidateFunction = require("../../r4/js/AuditEvent");

describe("AuditEvent", () => {
	 test("validate AuditEvent-example-disclosure.json", () => {
		 const auditeventExample1 = require("../r4-resources/AuditEvent-example-disclosure.json");
		 expect(auditeventValidateFunction(auditeventExample1)).toBe(true);
	 });

	 test("validate AuditEvent-example-login.json", () => {
		 const auditeventExample2 = require("../r4-resources/AuditEvent-example-login.json");
		 expect(auditeventValidateFunction(auditeventExample2)).toBe(true);
	 });

	 test("validate AuditEvent-example-logout.json", () => {
		 const auditeventExample3 = require("../r4-resources/AuditEvent-example-logout.json");
		 expect(auditeventValidateFunction(auditeventExample3)).toBe(true);
	 });

	 test("validate AuditEvent-example-media.json", () => {
		 const auditeventExample4 = require("../r4-resources/AuditEvent-example-media.json");
		 expect(auditeventValidateFunction(auditeventExample4)).toBe(true);
	 });

	 test("validate AuditEvent-example-pixQuery.json", () => {
		 const auditeventExample5 = require("../r4-resources/AuditEvent-example-pixQuery.json");
		 expect(auditeventValidateFunction(auditeventExample5)).toBe(true);
	 });

	 test("validate AuditEvent-example-rest.json", () => {
		 const auditeventExample6 = require("../r4-resources/AuditEvent-example-rest.json");
		 expect(auditeventValidateFunction(auditeventExample6)).toBe(true);
	 });

	 test("validate AuditEvent-example-search.json", () => {
		 const auditeventExample7 = require("../r4-resources/AuditEvent-example-search.json");
		 expect(auditeventValidateFunction(auditeventExample7)).toBe(true);
	 });

	 test("validate AuditEvent-example.json", () => {
		 const auditeventExample8 = require("../r4-resources/AuditEvent-example.json");
		 expect(auditeventValidateFunction(auditeventExample8)).toBe(true);
	 });

});