const researchdefinitionValidateFunction = require("../../r4/js/ResearchDefinition");

describe("ResearchDefinition", () => {
	 test("validate ResearchDefinition-example.json", () => {
		 const researchdefinitionExample1 = require("../r4-resources/ResearchDefinition-example.json");
		 expect(researchdefinitionValidateFunction(researchdefinitionExample1)).toBe(true);
	 });

});