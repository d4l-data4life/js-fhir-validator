const devicerequestValidateFunction = require("../../r4/js/DeviceRequest");

describe("DeviceRequest", () => {
	 test("validate DeviceRequest-example.json", () => {
		 const devicerequestExample1 = require("../r4-resources/DeviceRequest-example.json");
		 expect(devicerequestValidateFunction(devicerequestExample1)).toBe(true);
	 });

	 test("validate DeviceRequest-insulinpump.json", () => {
		 const devicerequestExample2 = require("../r4-resources/DeviceRequest-insulinpump.json");
		 expect(devicerequestValidateFunction(devicerequestExample2)).toBe(true);
	 });

	 test("validate DeviceRequest-left-lens.json", () => {
		 const devicerequestExample3 = require("../r4-resources/DeviceRequest-left-lens.json");
		 expect(devicerequestValidateFunction(devicerequestExample3)).toBe(true);
	 });

	 test("validate DeviceRequest-right-lens.json", () => {
		 const devicerequestExample4 = require("../r4-resources/DeviceRequest-right-lens.json");
		 expect(devicerequestValidateFunction(devicerequestExample4)).toBe(true);
	 });

});