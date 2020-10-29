const chargeitemdefinitionValidateFunction = require("../../r4/js/ChargeItemDefinition");

describe("ChargeItemDefinition", () => {
	 test("validate ChargeItemDefinition-device.json", () => {
		 const chargeitemdefinitionExample1 = require("../r4-resources/ChargeItemDefinition-device.json");
		 expect(chargeitemdefinitionValidateFunction(chargeitemdefinitionExample1)).toBe(true);
	 });

	 test("validate ChargeItemDefinition-ebm.json", () => {
		 const chargeitemdefinitionExample2 = require("../r4-resources/ChargeItemDefinition-ebm.json");
		 expect(chargeitemdefinitionValidateFunction(chargeitemdefinitionExample2)).toBe(true);
	 });

});