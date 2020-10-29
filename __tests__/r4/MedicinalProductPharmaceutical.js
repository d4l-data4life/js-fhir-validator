const medicinalproductpharmaceuticalValidateFunction = require("../../r4/js/MedicinalProductPharmaceutical");

describe("MedicinalProductPharmaceutical", () => {
	 test("validate MedicinalProductPharmaceutical-example.json", () => {
		 const medicinalproductpharmaceuticalExample1 = require("../r4-resources/MedicinalProductPharmaceutical-example.json");
		 expect(medicinalproductpharmaceuticalValidateFunction(medicinalproductpharmaceuticalExample1)).toBe(true);
	 });

});