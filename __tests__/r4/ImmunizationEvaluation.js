const immunizationevaluationValidateFunction = require("../../r4/js/ImmunizationEvaluation");

describe("ImmunizationEvaluation", () => {
	 test("validate ImmunizationEvaluation-example.json", () => {
		 const immunizationevaluationExample1 = require("../r4-resources/ImmunizationEvaluation-example.json");
		 expect(immunizationevaluationValidateFunction(immunizationevaluationExample1)).toBe(true);
	 });

	 test("validate ImmunizationEvaluation-notValid.json", () => {
		 const immunizationevaluationExample2 = require("../r4-resources/ImmunizationEvaluation-notValid.json");
		 expect(immunizationevaluationValidateFunction(immunizationevaluationExample2)).toBe(true);
	 });

});