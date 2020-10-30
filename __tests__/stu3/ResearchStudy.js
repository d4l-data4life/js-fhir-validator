const researchstudyValidateFunction = require("../../stu3/js/ResearchStudy");

describe("ResearchStudy", () => {
	 test("validate ResearchStudy-example.json", () => {
		 const researchstudyExample1 = require("../stu3-resources/ResearchStudy-example.json");
		 expect(researchstudyValidateFunction(researchstudyExample1)).toBe(true);
	 });

});