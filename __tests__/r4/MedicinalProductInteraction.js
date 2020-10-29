const medicinalproductinteractionValidateFunction = require("../../r4/js/MedicinalProductInteraction");

describe("MedicinalProductInteraction", () => {
	 test("validate MedicinalProductInteraction-example.json", () => {
		 const medicinalproductinteractionExample1 = require("../r4-resources/MedicinalProductInteraction-example.json");
		 expect(medicinalproductinteractionValidateFunction(medicinalproductinteractionExample1)).toBe(true);
	 });

});