const devicedefinitionValidateFunction = require("../../r4/js/DeviceDefinition");

describe("DeviceDefinition", () => {
	 test("validate DeviceDefinition-example.json", () => {
		 const devicedefinitionExample1 = require("../r4-resources/DeviceDefinition-example.json");
		 expect(devicedefinitionValidateFunction(devicedefinitionExample1)).toBe(true);
	 });

});