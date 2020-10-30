const riskassessmentValidateFunction = require("../../stu3/js/RiskAssessment");

describe("RiskAssessment", () => {
	 test("validate RiskAssessment-cardiac.json", () => {
		 const riskassessmentExample1 = require("../stu3-resources/RiskAssessment-cardiac.json");
		 expect(riskassessmentValidateFunction(riskassessmentExample1)).toBe(true);
	 });

	 test("validate RiskAssessment-genetic.json", () => {
		 const riskassessmentExample2 = require("../stu3-resources/RiskAssessment-genetic.json");
		 expect(riskassessmentValidateFunction(riskassessmentExample2)).toBe(true);
	 });

	 test("validate RiskAssessment-population.json", () => {
		 const riskassessmentExample3 = require("../stu3-resources/RiskAssessment-population.json");
		 expect(riskassessmentValidateFunction(riskassessmentExample3)).toBe(true);
	 });

	 test("validate RiskAssessment-prognosis.json", () => {
		 const riskassessmentExample4 = require("../stu3-resources/RiskAssessment-prognosis.json");
		 expect(riskassessmentValidateFunction(riskassessmentExample4)).toBe(true);
	 });

});