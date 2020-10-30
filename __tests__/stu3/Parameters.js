const parametersValidateFunction = require("../../stu3/js/Parameters");

describe("Parameters", () => {
	 test("validate Parameters-example.json", () => {
		 const parametersExample1 = require("../stu3-resources/Parameters-example.json");
		 expect(parametersValidateFunction(parametersExample1)).toBe(true);
	 });

});