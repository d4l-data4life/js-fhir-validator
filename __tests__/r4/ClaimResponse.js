const claimresponseValidateFunction = require("../../r4/js/ClaimResponse");

describe("ClaimResponse", () => {
	 test("validate ClaimResponse-R3500.json", () => {
		 const claimresponseExample1 = require("../r4-resources/ClaimResponse-R3500.json");
		 expect(claimresponseValidateFunction(claimresponseExample1)).toBe(true);
	 });

	 test("validate ClaimResponse-R3501.json", () => {
		 const claimresponseExample2 = require("../r4-resources/ClaimResponse-R3501.json");
		 expect(claimresponseValidateFunction(claimresponseExample2)).toBe(true);
	 });

	 test("validate ClaimResponse-R3502.json", () => {
		 const claimresponseExample3 = require("../r4-resources/ClaimResponse-R3502.json");
		 expect(claimresponseValidateFunction(claimresponseExample3)).toBe(true);
	 });

	 test("validate ClaimResponse-R3503.json", () => {
		 const claimresponseExample4 = require("../r4-resources/ClaimResponse-R3503.json");
		 expect(claimresponseValidateFunction(claimresponseExample4)).toBe(true);
	 });

	 test("validate ClaimResponse-UR3503.json", () => {
		 const claimresponseExample5 = require("../r4-resources/ClaimResponse-UR3503.json");
		 expect(claimresponseValidateFunction(claimresponseExample5)).toBe(true);
	 });

});