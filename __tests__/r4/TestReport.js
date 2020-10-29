const testreportValidateFunction = require("../../r4/js/TestReport");

describe("TestReport", () => {
	 test("validate TestReport-testreport-example.json", () => {
		 const testreportExample1 = require("../r4-resources/TestReport-testreport-example.json");
		 expect(testreportValidateFunction(testreportExample1)).toBe(true);
	 });

});