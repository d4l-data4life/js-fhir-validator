const medicinalproductValidateFunction = require("../../r4/js/MedicinalProduct");

describe("MedicinalProduct", () => {
	 test("validate MedicinalProduct-example.json", () => {
		 const medicinalproductExample1 = require("../r4-resources/MedicinalProduct-example.json");
		 expect(medicinalproductValidateFunction(medicinalproductExample1)).toBe(true);
	 });

});