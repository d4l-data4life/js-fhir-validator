const binaryValidateFunction = require("../../r4/js/Binary");

describe("Binary", () => {
	 test("validate Binary-example.json", () => {
		 const binaryExample1 = require("../r4-resources/Binary-example.json");
		 expect(binaryValidateFunction(binaryExample1)).toBe(true);
	 });

	 test("validate Binary-f006.json", () => {
		 const binaryExample2 = require("../r4-resources/Binary-f006.json");
		 expect(binaryValidateFunction(binaryExample2)).toBe(true);
	 });

});