const biologicallyderivedproductValidateFunction = require("../../r4/js/BiologicallyDerivedProduct");

describe("BiologicallyDerivedProduct", () => {
	 test("validate BiologicallyDerivedProduct-example.json", () => {
		 const biologicallyderivedproductExample1 = require("../r4-resources/BiologicallyDerivedProduct-example.json");
		 expect(biologicallyderivedproductValidateFunction(biologicallyderivedproductExample1)).toBe(true);
	 });

});