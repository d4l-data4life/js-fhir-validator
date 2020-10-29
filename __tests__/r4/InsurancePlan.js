const insuranceplanValidateFunction = require("../../r4/js/InsurancePlan");

describe("InsurancePlan", () => {
	 test("validate InsurancePlan-example.json", () => {
		 const insuranceplanExample1 = require("../r4-resources/InsurancePlan-example.json");
		 expect(insuranceplanValidateFunction(insuranceplanExample1)).toBe(true);
	 });

});