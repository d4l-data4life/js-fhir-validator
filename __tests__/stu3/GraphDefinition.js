const graphdefinitionValidateFunction = require("../../stu3/js/GraphDefinition");

describe("GraphDefinition", () => {
	 test("validate GraphDefinition-example.json", () => {
		 const graphdefinitionExample1 = require("../stu3-resources/GraphDefinition-example.json");
		 expect(graphdefinitionValidateFunction(graphdefinitionExample1)).toBe(true);
	 });

});