const immunizationrecommendationValidateFunction = require("../../stu3/js/ImmunizationRecommendation");

describe("ImmunizationRecommendation", () => {
	 test("validate ImmunizationRecommendation-example.json", () => {
		 const immunizationrecommendationExample1 = require("../stu3-resources/ImmunizationRecommendation-example.json");
		 expect(immunizationrecommendationValidateFunction(immunizationrecommendationExample1)).toBe(true);
	 });

});