const researchstudyValidateFunction = require("../../r4/js/ResearchStudy");

describe("ResearchStudy", () => {
	 test("validate ResearchStudy-example.json", () => {
		 const researchstudyExample1 = require("../r4-resources/ResearchStudy-example.json");
		 expect(researchstudyValidateFunction(researchstudyExample1)).toBe(true);
	 });

});