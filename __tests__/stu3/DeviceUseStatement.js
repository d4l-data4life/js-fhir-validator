const deviceusestatementValidateFunction = require("../../stu3/js/DeviceUseStatement");

describe("DeviceUseStatement", () => {
	 test("validate DeviceUseStatement-example.json", () => {
		 const deviceusestatementExample1 = require("../stu3-resources/DeviceUseStatement-example.json");
		 expect(deviceusestatementValidateFunction(deviceusestatementExample1)).toBe(true);
	 });

});