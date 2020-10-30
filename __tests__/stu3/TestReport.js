const testreportValidateFunction = require("../../stu3/js/TestReport");

describe("TestReport", () => {
	 test("validate TestReport-testreport-example.json", () => {
		 const testreportExample1 = require("../stu3-resources/TestReport-testreport-example.json");
		 expect(testreportValidateFunction(testreportExample1)).toBe(true);
	 });

});