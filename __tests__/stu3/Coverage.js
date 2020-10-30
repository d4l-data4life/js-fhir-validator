const coverageValidateFunction = require("../../stu3/js/Coverage");

describe("Coverage", () => {
	 test("validate Coverage-7546D.json", () => {
		 const coverageExample1 = require("../stu3-resources/Coverage-7546D.json");
		 expect(coverageValidateFunction(coverageExample1)).toBe(true);
	 });

	 test("validate Coverage-7547E.json", () => {
		 const coverageExample2 = require("../stu3-resources/Coverage-7547E.json");
		 expect(coverageValidateFunction(coverageExample2)).toBe(true);
	 });

	 test("validate Coverage-9876B1.json", () => {
		 const coverageExample3 = require("../stu3-resources/Coverage-9876B1.json");
		 expect(coverageValidateFunction(coverageExample3)).toBe(true);
	 });

	 test("validate Coverage-SP1234.json", () => {
		 const coverageExample4 = require("../stu3-resources/Coverage-SP1234.json");
		 expect(coverageValidateFunction(coverageExample4)).toBe(true);
	 });

});