const medicinalproductpackagedValidateFunction = require("../../r4/js/MedicinalProductPackaged");

describe("MedicinalProductPackaged", () => {
	 test("validate MedicinalProductPackaged-example.json", () => {
		 const medicinalproductpackagedExample1 = require("../r4-resources/MedicinalProductPackaged-example.json");
		 expect(medicinalproductpackagedValidateFunction(medicinalproductpackagedExample1)).toBe(true);
	 });

});