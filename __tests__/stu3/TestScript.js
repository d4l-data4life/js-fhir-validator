const testscriptValidateFunction = require("../../stu3/js/TestScript");

describe("TestScript", () => {
	 test("validate TestScript-testscript-example-history.json", () => {
		 const testscriptExample1 = require("../stu3-resources/TestScript-testscript-example-history.json");
		 expect(testscriptValidateFunction(testscriptExample1)).toBe(true);
	 });

	 test("validate TestScript-testscript-example-multisystem.json", () => {
		 const testscriptExample2 = require("../stu3-resources/TestScript-testscript-example-multisystem.json");
		 expect(testscriptValidateFunction(testscriptExample2)).toBe(true);
	 });

	 test("validate TestScript-testscript-example-readtest.json", () => {
		 const testscriptExample3 = require("../stu3-resources/TestScript-testscript-example-readtest.json");
		 expect(testscriptValidateFunction(testscriptExample3)).toBe(true);
	 });

	 test("validate TestScript-testscript-example-rule.json", () => {
		 const testscriptExample4 = require("../stu3-resources/TestScript-testscript-example-rule.json");
		 expect(testscriptValidateFunction(testscriptExample4)).toBe(true);
	 });

	 test("validate TestScript-testscript-example-search.json", () => {
		 const testscriptExample5 = require("../stu3-resources/TestScript-testscript-example-search.json");
		 expect(testscriptValidateFunction(testscriptExample5)).toBe(true);
	 });

	 test("validate TestScript-testscript-example-update.json", () => {
		 const testscriptExample6 = require("../stu3-resources/TestScript-testscript-example-update.json");
		 expect(testscriptValidateFunction(testscriptExample6)).toBe(true);
	 });

	 test("validate TestScript-testscript-example.json", () => {
		 const testscriptExample7 = require("../stu3-resources/TestScript-testscript-example.json");
		 expect(testscriptValidateFunction(testscriptExample7)).toBe(true);
	 });

});