const communicationValidateFunction = require("../../stu3/js/Communication");

describe("Communication", () => {
	 test("validate Communication-example.json", () => {
		 const communicationExample1 = require("../stu3-resources/Communication-example.json");
		 expect(communicationValidateFunction(communicationExample1)).toBe(true);
	 });

	 test("validate Communication-fm-attachment.json", () => {
		 const communicationExample2 = require("../stu3-resources/Communication-fm-attachment.json");
		 expect(communicationValidateFunction(communicationExample2)).toBe(true);
	 });

});