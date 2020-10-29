const riskassessmentValidateFunction = require("../../r4/js/RiskAssessment");

describe("RiskAssessment", () => {
	 test("validate RiskAssessment-breastcancer-risk.json", () => {
		 const riskassessmentExample1 = require("../r4-resources/RiskAssessment-breastcancer-risk.json");
		 expect(riskassessmentValidateFunction(riskassessmentExample1)).toBe(true);
	 });

	 test("validate RiskAssessment-cardiac.json", () => {
		 const riskassessmentExample2 = require("../r4-resources/RiskAssessment-cardiac.json");
		 expect(riskassessmentValidateFunction(riskassessmentExample2)).toBe(true);
	 });

	 test("validate RiskAssessment-genetic.json", () => {
		 const riskassessmentExample3 = require("../r4-resources/RiskAssessment-genetic.json");
		 expect(riskassessmentValidateFunction(riskassessmentExample3)).toBe(true);
	 });

	 test("validate RiskAssessment-prognosis.json", () => {
		 const riskassessmentExample4 = require("../r4-resources/RiskAssessment-prognosis.json");
		 expect(riskassessmentValidateFunction(riskassessmentExample4)).toBe(true);
	 });

	 test("validate RiskAssessment-riskexample.json", () => {
		 const riskassessmentExample5 = require("../r4-resources/RiskAssessment-riskexample.json");
		 expect(riskassessmentValidateFunction(riskassessmentExample5)).toBe(true);
	 });

});