const accountValidateFunction = require("../../r4/js/Account");

describe("Account", () => {
	 test("validate Account-ewg.json", () => {
		 const accountExample1 = require("../r4-resources/Account-ewg.json");
		 expect(accountValidateFunction(accountExample1)).toBe(true);
	 });

	 test("validate Account-example.json", () => {
		 const accountExample2 = require("../r4-resources/Account-example.json");
		 expect(accountValidateFunction(accountExample2)).toBe(true);
	 });

});