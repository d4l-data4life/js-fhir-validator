const supplydeliveryValidateFunction = require("../../stu3/js/SupplyDelivery");

describe("SupplyDelivery", () => {
	 test("validate SupplyDelivery-pumpdelivery.json", () => {
		 const supplydeliveryExample1 = require("../stu3-resources/SupplyDelivery-pumpdelivery.json");
		 expect(supplydeliveryValidateFunction(supplydeliveryExample1)).toBe(true);
	 });

	 test("validate SupplyDelivery-simpledelivery.json", () => {
		 const supplydeliveryExample2 = require("../stu3-resources/SupplyDelivery-simpledelivery.json");
		 expect(supplydeliveryValidateFunction(supplydeliveryExample2)).toBe(true);
	 });

});