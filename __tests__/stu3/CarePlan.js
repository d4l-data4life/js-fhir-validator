const careplanValidateFunction = require("../../stu3/js/CarePlan");

describe("CarePlan", () => {
	 test("validate CarePlan-obesity-narrative.json", () => {
		 const careplanExample1 = require("../stu3-resources/CarePlan-obesity-narrative.json");
		 expect(careplanValidateFunction(careplanExample1)).toBe(true);
	 });

});