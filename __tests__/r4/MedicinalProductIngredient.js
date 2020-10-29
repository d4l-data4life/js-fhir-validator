const medicinalproductingredientValidateFunction = require("../../r4/js/MedicinalProductIngredient");

describe("MedicinalProductIngredient", () => {
	 test("validate MedicinalProductIngredient-example.json", () => {
		 const medicinalproductingredientExample1 = require("../r4-resources/MedicinalProductIngredient-example.json");
		 expect(medicinalproductingredientValidateFunction(medicinalproductingredientExample1)).toBe(true);
	 });

});