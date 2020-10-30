const referralrequestValidateFunction = require("../../stu3/js/ReferralRequest");

describe("ReferralRequest", () => {
	 test("validate ReferralRequest-example.json", () => {
		 const referralrequestExample1 = require("../stu3-resources/ReferralRequest-example.json");
		 expect(referralrequestValidateFunction(referralrequestExample1)).toBe(true);
	 });

});