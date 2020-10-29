const detectedissueValidateFunction = require("../../r4/js/DetectedIssue");

describe("DetectedIssue", () => {
	 test("validate DetectedIssue-allergy.json", () => {
		 const detectedissueExample1 = require("../r4-resources/DetectedIssue-allergy.json");
		 expect(detectedissueValidateFunction(detectedissueExample1)).toBe(true);
	 });

	 test("validate DetectedIssue-ddi.json", () => {
		 const detectedissueExample2 = require("../r4-resources/DetectedIssue-ddi.json");
		 expect(detectedissueValidateFunction(detectedissueExample2)).toBe(true);
	 });

	 test("validate DetectedIssue-duplicate.json", () => {
		 const detectedissueExample3 = require("../r4-resources/DetectedIssue-duplicate.json");
		 expect(detectedissueValidateFunction(detectedissueExample3)).toBe(true);
	 });

	 test("validate DetectedIssue-lab.json", () => {
		 const detectedissueExample4 = require("../r4-resources/DetectedIssue-lab.json");
		 expect(detectedissueValidateFunction(detectedissueExample4)).toBe(true);
	 });

});