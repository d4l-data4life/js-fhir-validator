const graphdefinitionValidateFunction = require("../../r4/js/GraphDefinition");

describe("GraphDefinition", () => {
	 test("validate GraphDefinition-example.json", () => {
		 const graphdefinitionExample1 = require("../r4-resources/GraphDefinition-example.json");
		 expect(graphdefinitionValidateFunction(graphdefinitionExample1)).toBe(true);
	 });

});