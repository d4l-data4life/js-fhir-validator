const coverageeligibilityrequestValidateFunction = require("../../r4/js/CoverageEligibilityRequest");

describe("CoverageEligibilityRequest", () => {
	 test("validate CoverageEligibilityRequest-52345.json", () => {
		 const coverageeligibilityrequestExample1 = require("../r4-resources/CoverageEligibilityRequest-52345.json");
		 expect(coverageeligibilityrequestValidateFunction(coverageeligibilityrequestExample1)).toBe(true);
	 });

	 test("validate CoverageEligibilityRequest-52346.json", () => {
		 const coverageeligibilityrequestExample2 = require("../r4-resources/CoverageEligibilityRequest-52346.json");
		 expect(coverageeligibilityrequestValidateFunction(coverageeligibilityrequestExample2)).toBe(true);
	 });

});