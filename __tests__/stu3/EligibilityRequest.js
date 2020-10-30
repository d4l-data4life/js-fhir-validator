const eligibilityrequestValidateFunction = require("../../stu3/js/EligibilityRequest");

describe("EligibilityRequest", () => {
	 test("validate EligibilityRequest-52345.json", () => {
		 const eligibilityrequestExample1 = require("../stu3-resources/EligibilityRequest-52345.json");
		 expect(eligibilityrequestValidateFunction(eligibilityrequestExample1)).toBe(true);
	 });

	 test("validate EligibilityRequest-52346.json", () => {
		 const eligibilityrequestExample2 = require("../stu3-resources/EligibilityRequest-52346.json");
		 expect(eligibilityrequestValidateFunction(eligibilityrequestExample2)).toBe(true);
	 });

});