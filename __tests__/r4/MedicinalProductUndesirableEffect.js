const medicinalproductundesirableeffectValidateFunction = require("../../r4/js/MedicinalProductUndesirableEffect");

describe("MedicinalProductUndesirableEffect", () => {
	 test("validate MedicinalProductUndesirableEffect-example.json", () => {
		 const medicinalproductundesirableeffectExample1 = require("../r4-resources/MedicinalProductUndesirableEffect-example.json");
		 expect(medicinalproductundesirableeffectValidateFunction(medicinalproductundesirableeffectExample1)).toBe(true);
	 });

});