const explanationofbenefitValidateFunction = require("../../stu3/js/ExplanationOfBenefit");

describe("ExplanationOfBenefit", () => {
	 test("validate ExplanationOfBenefit-EB3500.json", () => {
		 const explanationofbenefitExample1 = require("../stu3-resources/ExplanationOfBenefit-EB3500.json");
		 expect(explanationofbenefitValidateFunction(explanationofbenefitExample1)).toBe(true);
	 });

});