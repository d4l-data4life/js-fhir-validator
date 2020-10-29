const enrollmentrequestValidateFunction = require("../../r4/js/EnrollmentRequest");

describe("EnrollmentRequest", () => {
	 test("validate EnrollmentRequest-22345.json", () => {
		 const enrollmentrequestExample1 = require("../r4-resources/EnrollmentRequest-22345.json");
		 expect(enrollmentrequestValidateFunction(enrollmentrequestExample1)).toBe(true);
	 });

});