const devicemetricValidateFunction = require("../../stu3/js/DeviceMetric");

describe("DeviceMetric", () => {
	 test("validate DeviceMetric-example.json", () => {
		 const devicemetricExample1 = require("../stu3-resources/DeviceMetric-example.json");
		 expect(devicemetricValidateFunction(devicemetricExample1)).toBe(true);
	 });

});