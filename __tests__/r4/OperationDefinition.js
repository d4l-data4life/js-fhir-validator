const operationdefinitionValidateFunction = require("../../r4/js/OperationDefinition");

describe("OperationDefinition", () => {
	 test("validate OperationDefinition-example.json", () => {
		 const operationdefinitionExample1 = require("../r4-resources/OperationDefinition-example.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample1)).toBe(true);
	 });

});