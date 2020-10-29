const explanationofbenefitValidateFunction = require("../../r4/js/ExplanationOfBenefit");

describe("ExplanationOfBenefit", () => {
	 test("validate ExplanationOfBenefit-EB3500.json", () => {
		 const explanationofbenefitExample1 = require("../r4-resources/ExplanationOfBenefit-EB3500.json");
		 expect(explanationofbenefitValidateFunction(explanationofbenefitExample1)).toBe(true);
	 });

	 test("validate ExplanationOfBenefit-EB3501.json", () => {
		 const explanationofbenefitExample2 = require("../r4-resources/ExplanationOfBenefit-EB3501.json");
		 expect(explanationofbenefitValidateFunction(explanationofbenefitExample2)).toBe(true);
	 });

});