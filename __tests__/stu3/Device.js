const deviceValidateFunction = require("../../stu3/js/Device");

describe("Device", () => {
	 test("validate Device-example-pacemaker.json", () => {
		 const deviceExample1 = require("../stu3-resources/Device-example-pacemaker.json");
		 expect(deviceValidateFunction(deviceExample1)).toBe(true);
	 });

	 test("validate Device-example-udi1.json", () => {
		 const deviceExample2 = require("../stu3-resources/Device-example-udi1.json");
		 expect(deviceValidateFunction(deviceExample2)).toBe(true);
	 });

	 test("validate Device-example-udi3.json", () => {
		 const deviceExample3 = require("../stu3-resources/Device-example-udi3.json");
		 expect(deviceValidateFunction(deviceExample3)).toBe(true);
	 });

	 test("validate Device-example-udi4.json", () => {
		 const deviceExample4 = require("../stu3-resources/Device-example-udi4.json");
		 expect(deviceValidateFunction(deviceExample4)).toBe(true);
	 });

	 test("validate Device-example.json", () => {
		 const deviceExample5 = require("../stu3-resources/Device-example.json");
		 expect(deviceValidateFunction(deviceExample5)).toBe(true);
	 });

	 test("validate Device-f001.json", () => {
		 const deviceExample6 = require("../stu3-resources/Device-f001.json");
		 expect(deviceValidateFunction(deviceExample6)).toBe(true);
	 });

	 test("validate Device-ihe-pcd.json", () => {
		 const deviceExample7 = require("../stu3-resources/Device-ihe-pcd.json");
		 expect(deviceValidateFunction(deviceExample7)).toBe(true);
	 });

	 test("validate Device-software.json", () => {
		 const deviceExample8 = require("../stu3-resources/Device-software.json");
		 expect(deviceValidateFunction(deviceExample8)).toBe(true);
	 });

});