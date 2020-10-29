const devicemetricValidateFunction = require("../../r4/js/DeviceMetric");

describe("DeviceMetric", () => {
	 test("validate DeviceMetric-example.json", () => {
		 const devicemetricExample1 = require("../r4-resources/DeviceMetric-example.json");
		 expect(devicemetricValidateFunction(devicemetricExample1)).toBe(true);
	 });

});