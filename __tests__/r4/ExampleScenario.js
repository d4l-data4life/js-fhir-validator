const examplescenarioValidateFunction = require("../../r4/js/ExampleScenario");

describe("ExampleScenario", () => {
	 test("validate ExampleScenario-example.json", () => {
		 const examplescenarioExample1 = require("../r4-resources/ExampleScenario-example.json");
		 expect(examplescenarioValidateFunction(examplescenarioExample1)).toBe(true);
	 });

});