const basicValidateFunction = require("../../stu3/js/Basic");

describe("Basic", () => {
	 test("validate Basic-basic-example-narrative.json", () => {
		 const basicExample1 = require("../stu3-resources/Basic-basic-example-narrative.json");
		 expect(basicValidateFunction(basicExample1)).toBe(true);
	 });

});