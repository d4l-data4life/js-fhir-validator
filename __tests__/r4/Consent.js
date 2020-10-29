const consentValidateFunction = require("../../r4/js/Consent");

describe("Consent", () => {
	 test("validate Consent-consent-example-Emergency.json", () => {
		 const consentExample1 = require("../r4-resources/Consent-consent-example-Emergency.json");
		 expect(consentValidateFunction(consentExample1)).toBe(true);
	 });

	 test("validate Consent-consent-example-Out.json", () => {
		 const consentExample2 = require("../r4-resources/Consent-consent-example-Out.json");
		 expect(consentValidateFunction(consentExample2)).toBe(true);
	 });

	 test("validate Consent-consent-example-basic.json", () => {
		 const consentExample3 = require("../r4-resources/Consent-consent-example-basic.json");
		 expect(consentValidateFunction(consentExample3)).toBe(true);
	 });

	 test("validate Consent-consent-example-grantor.json", () => {
		 const consentExample4 = require("../r4-resources/Consent-consent-example-grantor.json");
		 expect(consentValidateFunction(consentExample4)).toBe(true);
	 });

	 test("validate Consent-consent-example-notAuthor.json", () => {
		 const consentExample5 = require("../r4-resources/Consent-consent-example-notAuthor.json");
		 expect(consentValidateFunction(consentExample5)).toBe(true);
	 });

	 test("validate Consent-consent-example-notOrg.json", () => {
		 const consentExample6 = require("../r4-resources/Consent-consent-example-notOrg.json");
		 expect(consentValidateFunction(consentExample6)).toBe(true);
	 });

	 test("validate Consent-consent-example-notThem.json", () => {
		 const consentExample7 = require("../r4-resources/Consent-consent-example-notThem.json");
		 expect(consentValidateFunction(consentExample7)).toBe(true);
	 });

	 test("validate Consent-consent-example-notThis.json", () => {
		 const consentExample8 = require("../r4-resources/Consent-consent-example-notThis.json");
		 expect(consentValidateFunction(consentExample8)).toBe(true);
	 });

	 test("validate Consent-consent-example-notTime.json", () => {
		 const consentExample9 = require("../r4-resources/Consent-consent-example-notTime.json");
		 expect(consentValidateFunction(consentExample9)).toBe(true);
	 });

	 test("validate Consent-consent-example-pkb.json", () => {
		 const consentExample10 = require("../r4-resources/Consent-consent-example-pkb.json");
		 expect(consentValidateFunction(consentExample10)).toBe(true);
	 });

	 test("validate Consent-consent-example-signature.json", () => {
		 const consentExample11 = require("../r4-resources/Consent-consent-example-signature.json");
		 expect(consentValidateFunction(consentExample11)).toBe(true);
	 });

	 test("validate Consent-consent-example-smartonfhir.json", () => {
		 const consentExample12 = require("../r4-resources/Consent-consent-example-smartonfhir.json");
		 expect(consentValidateFunction(consentExample12)).toBe(true);
	 });

});