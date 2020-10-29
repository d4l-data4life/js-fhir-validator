const coverageeligibilityresponseValidateFunction = require("../../r4/js/CoverageEligibilityResponse");

describe("CoverageEligibilityResponse", () => {
	 test("validate CoverageEligibilityResponse-E2500.json", () => {
		 const coverageeligibilityresponseExample1 = require("../r4-resources/CoverageEligibilityResponse-E2500.json");
		 expect(coverageeligibilityresponseValidateFunction(coverageeligibilityresponseExample1)).toBe(true);
	 });

	 test("validate CoverageEligibilityResponse-E2501.json", () => {
		 const coverageeligibilityresponseExample2 = require("../r4-resources/CoverageEligibilityResponse-E2501.json");
		 expect(coverageeligibilityresponseValidateFunction(coverageeligibilityresponseExample2)).toBe(true);
	 });

	 test("validate CoverageEligibilityResponse-E2503.json", () => {
		 const coverageeligibilityresponseExample3 = require("../r4-resources/CoverageEligibilityResponse-E2503.json");
		 expect(coverageeligibilityresponseValidateFunction(coverageeligibilityresponseExample3)).toBe(true);
	 });

});