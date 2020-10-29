const eventdefinitionValidateFunction = require("../../r4/js/EventDefinition");

describe("EventDefinition", () => {
	 test("validate EventDefinition-example.json", () => {
		 const eventdefinitionExample1 = require("../r4-resources/EventDefinition-example.json");
		 expect(eventdefinitionValidateFunction(eventdefinitionExample1)).toBe(true);
	 });

});