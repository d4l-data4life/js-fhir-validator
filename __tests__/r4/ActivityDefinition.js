const activitydefinitionValidateFunction = require("../../r4/js/ActivityDefinition");

describe("ActivityDefinition", () => {
	 test("validate ActivityDefinition-administer-zika-virus-exposure-assessment.json", () => {
		 const activitydefinitionExample1 = require("../r4-resources/ActivityDefinition-administer-zika-virus-exposure-assessment.json");
		 expect(activitydefinitionValidateFunction(activitydefinitionExample1)).toBe(true);
	 });

	 test("validate ActivityDefinition-blood-tubes-supply.json", () => {
		 const activitydefinitionExample2 = require("../r4-resources/ActivityDefinition-blood-tubes-supply.json");
		 expect(activitydefinitionValidateFunction(activitydefinitionExample2)).toBe(true);
	 });

	 test("validate ActivityDefinition-heart-valve-replacement.json", () => {
		 const activitydefinitionExample3 = require("../r4-resources/ActivityDefinition-heart-valve-replacement.json");
		 expect(activitydefinitionValidateFunction(activitydefinitionExample3)).toBe(true);
	 });

	 test("validate ActivityDefinition-provide-mosquito-prevention-advice.json", () => {
		 const activitydefinitionExample4 = require("../r4-resources/ActivityDefinition-provide-mosquito-prevention-advice.json");
		 expect(activitydefinitionValidateFunction(activitydefinitionExample4)).toBe(true);
	 });

	 test("validate ActivityDefinition-referralPrimaryCareMentalHealth-initial.json", () => {
		 const activitydefinitionExample5 = require("../r4-resources/ActivityDefinition-referralPrimaryCareMentalHealth-initial.json");
		 expect(activitydefinitionValidateFunction(activitydefinitionExample5)).toBe(true);
	 });

	 test("validate ActivityDefinition-referralPrimaryCareMentalHealth.json", () => {
		 const activitydefinitionExample6 = require("../r4-resources/ActivityDefinition-referralPrimaryCareMentalHealth.json");
		 expect(activitydefinitionValidateFunction(activitydefinitionExample6)).toBe(true);
	 });

	 test("validate ActivityDefinition-serum-dengue-virus-igm.json", () => {
		 const activitydefinitionExample7 = require("../r4-resources/ActivityDefinition-serum-dengue-virus-igm.json");
		 expect(activitydefinitionValidateFunction(activitydefinitionExample7)).toBe(true);
	 });

	 test("validate ActivityDefinition-serum-zika-dengue-virus-igm.json", () => {
		 const activitydefinitionExample8 = require("../r4-resources/ActivityDefinition-serum-zika-dengue-virus-igm.json");
		 expect(activitydefinitionValidateFunction(activitydefinitionExample8)).toBe(true);
	 });

});