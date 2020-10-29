const immunizationrecommendationValidateFunction = require("../../r4/js/ImmunizationRecommendation");

describe("ImmunizationRecommendation", () => {
	 test("validate ImmunizationRecommendation-example.json", () => {
		 const immunizationrecommendationExample1 = require("../r4-resources/ImmunizationRecommendation-example.json");
		 expect(immunizationrecommendationValidateFunction(immunizationrecommendationExample1)).toBe(true);
	 });

});