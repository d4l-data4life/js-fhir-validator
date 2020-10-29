const medicinalproductcontraindicationValidateFunction = require("../../r4/js/MedicinalProductContraindication");

describe("MedicinalProductContraindication", () => {
	 test("validate MedicinalProductContraindication-example.json", () => {
		 const medicinalproductcontraindicationExample1 = require("../r4-resources/MedicinalProductContraindication-example.json");
		 expect(medicinalproductcontraindicationValidateFunction(medicinalproductcontraindicationExample1)).toBe(true);
	 });

});