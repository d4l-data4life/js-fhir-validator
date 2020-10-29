const medicinalproductauthorizationValidateFunction = require("../../r4/js/MedicinalProductAuthorization");

describe("MedicinalProductAuthorization", () => {
	 test("validate MedicinalProductAuthorization-example.json", () => {
		 const medicinalproductauthorizationExample1 = require("../r4-resources/MedicinalProductAuthorization-example.json");
		 expect(medicinalproductauthorizationValidateFunction(medicinalproductauthorizationExample1)).toBe(true);
	 });

});