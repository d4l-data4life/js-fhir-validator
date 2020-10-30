const eligibilityresponseValidateFunction = require("../../stu3/js/EligibilityResponse");

describe("EligibilityResponse", () => {
	 test("validate EligibilityResponse-E2500.json", () => {
		 const eligibilityresponseExample1 = require("../stu3-resources/EligibilityResponse-E2500.json");
		 expect(eligibilityresponseValidateFunction(eligibilityresponseExample1)).toBe(true);
	 });

	 test("validate EligibilityResponse-E2501.json", () => {
		 const eligibilityresponseExample2 = require("../stu3-resources/EligibilityResponse-E2501.json");
		 expect(eligibilityresponseValidateFunction(eligibilityresponseExample2)).toBe(true);
	 });

	 test("validate EligibilityResponse-E2503.json", () => {
		 const eligibilityresponseExample3 = require("../stu3-resources/EligibilityResponse-E2503.json");
		 expect(eligibilityresponseValidateFunction(eligibilityresponseExample3)).toBe(true);
	 });

});