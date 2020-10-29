const medicinalproductmanufacturedValidateFunction = require("../../r4/js/MedicinalProductManufactured");

describe("MedicinalProductManufactured", () => {
	 test("validate MedicinalProductManufactured-example.json", () => {
		 const medicinalproductmanufacturedExample1 = require("../r4-resources/MedicinalProductManufactured-example.json");
		 expect(medicinalproductmanufacturedValidateFunction(medicinalproductmanufacturedExample1)).toBe(true);
	 });

});