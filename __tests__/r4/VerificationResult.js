const verificationresultValidateFunction = require("../../r4/js/VerificationResult");

describe("VerificationResult", () => {
	 test("validate VerificationResult-example.json", () => {
		 const verificationresultExample1 = require("../r4-resources/VerificationResult-example.json");
		 expect(verificationresultValidateFunction(verificationresultExample1)).toBe(true);
	 });

});