const devicecomponentValidateFunction = require("../../stu3/js/DeviceComponent");

describe("DeviceComponent", () => {
	 test("validate DeviceComponent-example-prodspec.json", () => {
		 const devicecomponentExample1 = require("../stu3-resources/DeviceComponent-example-prodspec.json");
		 expect(devicecomponentValidateFunction(devicecomponentExample1)).toBe(true);
	 });

	 test("validate DeviceComponent-example.json", () => {
		 const devicecomponentExample2 = require("../stu3-resources/DeviceComponent-example.json");
		 expect(devicecomponentValidateFunction(devicecomponentExample2)).toBe(true);
	 });

});