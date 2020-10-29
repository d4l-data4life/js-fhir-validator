const medicinalproductindicationValidateFunction = require("../../r4/js/MedicinalProductIndication");

describe("MedicinalProductIndication", () => {
	 test("validate MedicinalProductIndication-example.json", () => {
		 const medicinalproductindicationExample1 = require("../r4-resources/MedicinalProductIndication-example.json");
		 expect(medicinalproductindicationValidateFunction(medicinalproductindicationExample1)).toBe(true);
	 });

});