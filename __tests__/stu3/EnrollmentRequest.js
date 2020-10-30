const enrollmentrequestValidateFunction = require("../../stu3/js/EnrollmentRequest");

describe("EnrollmentRequest", () => {
	 test("validate EnrollmentRequest-22345.json", () => {
		 const enrollmentrequestExample1 = require("../stu3-resources/EnrollmentRequest-22345.json");
		 expect(enrollmentrequestValidateFunction(enrollmentrequestExample1)).toBe(true);
	 });

});