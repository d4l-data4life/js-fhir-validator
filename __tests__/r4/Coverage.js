const coverageValidateFunction = require("../../r4/js/Coverage");

describe("Coverage", () => {
	 test("validate Coverage-7546D.json", () => {
		 const coverageExample1 = require("../r4-resources/Coverage-7546D.json");
		 expect(coverageValidateFunction(coverageExample1)).toBe(true);
	 });

	 test("validate Coverage-7547E.json", () => {
		 const coverageExample2 = require("../r4-resources/Coverage-7547E.json");
		 expect(coverageValidateFunction(coverageExample2)).toBe(true);
	 });

	 test("validate Coverage-9876B1.json", () => {
		 const coverageExample3 = require("../r4-resources/Coverage-9876B1.json");
		 expect(coverageValidateFunction(coverageExample3)).toBe(true);
	 });

	 test("validate Coverage-SP1234.json", () => {
		 const coverageExample4 = require("../r4-resources/Coverage-SP1234.json");
		 expect(coverageValidateFunction(coverageExample4)).toBe(true);
	 });

});