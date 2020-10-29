const compositionValidateFunction = require("../../r4/js/Composition");

describe("Composition", () => {
	 test("validate Composition-example-mixed.json", () => {
		 const compositionExample1 = require("../r4-resources/Composition-example-mixed.json");
		 expect(compositionValidateFunction(compositionExample1)).toBe(true);
	 });

	 test("validate Composition-example.json", () => {
		 const compositionExample2 = require("../r4-resources/Composition-example.json");
		 expect(compositionValidateFunction(compositionExample2)).toBe(true);
	 });

});