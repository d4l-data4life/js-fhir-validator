const flagValidateFunction = require("../../r4/js/Flag");

describe("Flag", () => {
	 test("validate Flag-example-encounter.json", () => {
		 const flagExample1 = require("../r4-resources/Flag-example-encounter.json");
		 expect(flagValidateFunction(flagExample1)).toBe(true);
	 });

	 test("validate Flag-example.json", () => {
		 const flagExample2 = require("../r4-resources/Flag-example.json");
		 expect(flagValidateFunction(flagExample2)).toBe(true);
	 });

});