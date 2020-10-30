const flagValidateFunction = require("../../stu3/js/Flag");

describe("Flag", () => {
	 test("validate Flag-example-encounter.json", () => {
		 const flagExample1 = require("../stu3-resources/Flag-example-encounter.json");
		 expect(flagValidateFunction(flagExample1)).toBe(true);
	 });

	 test("validate Flag-example.json", () => {
		 const flagExample2 = require("../stu3-resources/Flag-example.json");
		 expect(flagValidateFunction(flagExample2)).toBe(true);
	 });

});