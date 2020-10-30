const chargeitemValidateFunction = require("../../stu3/js/ChargeItem");

describe("ChargeItem", () => {
	 test("validate ChargeItem-example.json", () => {
		 const chargeitemExample1 = require("../stu3-resources/ChargeItem-example.json");
		 expect(chargeitemValidateFunction(chargeitemExample1)).toBe(true);
	 });

});