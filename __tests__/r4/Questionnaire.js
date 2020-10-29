const questionnaireValidateFunction = require("../../r4/js/Questionnaire");

describe("Questionnaire", () => {
	 test("validate Questionnaire-3141.json", () => {
		 const questionnaireExample1 = require("../r4-resources/Questionnaire-3141.json");
		 expect(questionnaireValidateFunction(questionnaireExample1)).toBe(true);
	 });

	 test("validate Questionnaire-bb.json", () => {
		 const questionnaireExample2 = require("../r4-resources/Questionnaire-bb.json");
		 expect(questionnaireValidateFunction(questionnaireExample2)).toBe(true);
	 });

	 test("validate Questionnaire-f201.json", () => {
		 const questionnaireExample3 = require("../r4-resources/Questionnaire-f201.json");
		 expect(questionnaireValidateFunction(questionnaireExample3)).toBe(true);
	 });

	 test("validate Questionnaire-qs1.json", () => {
		 const questionnaireExample4 = require("../r4-resources/Questionnaire-qs1.json");
		 expect(questionnaireValidateFunction(questionnaireExample4)).toBe(true);
	 });

	 test("validate Questionnaire-zika-virus-exposure-assessment.json", () => {
		 const questionnaireExample5 = require("../r4-resources/Questionnaire-zika-virus-exposure-assessment.json");
		 expect(questionnaireValidateFunction(questionnaireExample5)).toBe(true);
	 });

});