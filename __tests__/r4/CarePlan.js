const careplanValidateFunction = require("../../r4/js/CarePlan");

describe("CarePlan", () => {
	 test("validate CarePlan-obesity-narrative.json", () => {
		 const careplanExample1 = require("../r4-resources/CarePlan-obesity-narrative.json");
		 expect(careplanValidateFunction(careplanExample1)).toBe(true);
	 });

});