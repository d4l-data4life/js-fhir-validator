const devicerequestValidateFunction = require("../../stu3/js/DeviceRequest");

describe("DeviceRequest", () => {
	 test("validate DeviceRequest-example.json", () => {
		 const devicerequestExample1 = require("../stu3-resources/DeviceRequest-example.json");
		 expect(devicerequestValidateFunction(devicerequestExample1)).toBe(true);
	 });

	 test("validate DeviceRequest-insulinpump.json", () => {
		 const devicerequestExample2 = require("../stu3-resources/DeviceRequest-insulinpump.json");
		 expect(devicerequestValidateFunction(devicerequestExample2)).toBe(true);
	 });

});