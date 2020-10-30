const questionnaireresponseValidateFunction = require("../../stu3/js/QuestionnaireResponse");

describe("QuestionnaireResponse", () => {
	 test("validate QuestionnaireResponse-bb.json", () => {
		 const questionnaireresponseExample1 = require("../stu3-resources/QuestionnaireResponse-bb.json");
		 expect(questionnaireresponseValidateFunction(questionnaireresponseExample1)).toBe(true);
	 });

	 test("validate QuestionnaireResponse-f201.json", () => {
		 const questionnaireresponseExample2 = require("../stu3-resources/QuestionnaireResponse-f201.json");
		 expect(questionnaireresponseValidateFunction(questionnaireresponseExample2)).toBe(true);
	 });

	 test("validate QuestionnaireResponse-gcs.json", () => {
		 const questionnaireresponseExample3 = require("../stu3-resources/QuestionnaireResponse-gcs.json");
		 expect(questionnaireresponseValidateFunction(questionnaireresponseExample3)).toBe(true);
	 });

	 test("validate QuestionnaireResponse-ussg-fht-answers.json", () => {
		 const questionnaireresponseExample4 = require("../stu3-resources/QuestionnaireResponse-ussg-fht-answers.json");
		 expect(questionnaireresponseValidateFunction(questionnaireresponseExample4)).toBe(true);
	 });

});