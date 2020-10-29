const researchelementdefinitionValidateFunction = require("../../r4/js/ResearchElementDefinition");

describe("ResearchElementDefinition", () => {
	 test("validate ResearchElementDefinition-example.json", () => {
		 const researchelementdefinitionExample1 = require("../r4-resources/ResearchElementDefinition-example.json");
		 expect(researchelementdefinitionValidateFunction(researchelementdefinitionExample1)).toBe(true);
	 });

});