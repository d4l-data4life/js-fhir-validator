const deviceusestatementValidateFunction = require("../../r4/js/DeviceUseStatement");

describe("DeviceUseStatement", () => {
	 test("validate DeviceUseStatement-example.json", () => {
		 const deviceusestatementExample1 = require("../r4-resources/DeviceUseStatement-example.json");
		 expect(deviceusestatementValidateFunction(deviceusestatementExample1)).toBe(true);
	 });

});