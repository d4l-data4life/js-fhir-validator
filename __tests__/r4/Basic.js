const basicValidateFunction = require("../../r4/js/Basic");

describe("Basic", () => {
	 test("validate Basic-basic-example-narrative.json", () => {
		 const basicExample1 = require("../r4-resources/Basic-basic-example-narrative.json");
		 expect(basicValidateFunction(basicExample1)).toBe(true);
	 });

});