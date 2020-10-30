const questionnaireValidateFunction = require("../../stu3/js/Questionnaire");

describe("Questionnaire", () => {
	 test("validate Questionnaire-3141.json", () => {
		 const questionnaireExample1 = require("../stu3-resources/Questionnaire-3141.json");
		 expect(questionnaireValidateFunction(questionnaireExample1)).toBe(true);
	 });

	 test("validate Questionnaire-bb.json", () => {
		 const questionnaireExample2 = require("../stu3-resources/Questionnaire-bb.json");
		 expect(questionnaireValidateFunction(questionnaireExample2)).toBe(true);
	 });

	 test("validate Questionnaire-f201.json", () => {
		 const questionnaireExample3 = require("../stu3-resources/Questionnaire-f201.json");
		 expect(questionnaireValidateFunction(questionnaireExample3)).toBe(true);
	 });

	 test("validate Questionnaire-zika-virus-exposure-assessment.json", () => {
		 const questionnaireExample4 = require("../stu3-resources/Questionnaire-zika-virus-exposure-assessment.json");
		 expect(questionnaireValidateFunction(questionnaireExample4)).toBe(true);
	 });

});