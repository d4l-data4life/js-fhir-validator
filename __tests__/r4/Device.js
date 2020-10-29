const deviceValidateFunction = require("../../r4/js/Device");

describe("Device", () => {
	 test("validate Device-example.json", () => {
		 const deviceExample1 = require("../r4-resources/Device-example.json");
		 expect(deviceValidateFunction(deviceExample1)).toBe(true);
	 });

	 test("validate Device-f001.json", () => {
		 const deviceExample2 = require("../r4-resources/Device-f001.json");
		 expect(deviceValidateFunction(deviceExample2)).toBe(true);
	 });

});