const binaryValidateFunction = require("../../stu3/js/Binary");

describe("Binary", () => {
	 test("validate Binary-example.json", () => {
		 const binaryExample1 = require("../stu3-resources/Binary-example.json");
		 expect(binaryValidateFunction(binaryExample1)).toBe(true);
	 });

	 test("validate Binary-f006.json", () => {
		 const binaryExample2 = require("../stu3-resources/Binary-f006.json");
		 expect(binaryValidateFunction(binaryExample2)).toBe(true);
	 });

});