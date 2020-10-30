const enrollmentresponseValidateFunction = require("../../stu3/js/EnrollmentResponse");

describe("EnrollmentResponse", () => {
	 test("validate EnrollmentResponse-ER2500.json", () => {
		 const enrollmentresponseExample1 = require("../stu3-resources/EnrollmentResponse-ER2500.json");
		 expect(enrollmentresponseValidateFunction(enrollmentresponseExample1)).toBe(true);
	 });

});