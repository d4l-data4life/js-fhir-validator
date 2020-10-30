const claimresponseValidateFunction = require("../../stu3/js/ClaimResponse");

describe("ClaimResponse", () => {
	 test("validate ClaimResponse-R3500.json", () => {
		 const claimresponseExample1 = require("../stu3-resources/ClaimResponse-R3500.json");
		 expect(claimresponseValidateFunction(claimresponseExample1)).toBe(true);
	 });

});