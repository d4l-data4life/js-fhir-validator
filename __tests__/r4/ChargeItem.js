const chargeitemValidateFunction = require("../../r4/js/ChargeItem");

describe("ChargeItem", () => {
	 test("validate ChargeItem-example.json", () => {
		 const chargeitemExample1 = require("../r4-resources/ChargeItem-example.json");
		 expect(chargeitemValidateFunction(chargeitemExample1)).toBe(true);
	 });

});