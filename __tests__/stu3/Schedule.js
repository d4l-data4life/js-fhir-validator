const scheduleValidateFunction = require("../../stu3/js/Schedule");

describe("Schedule", () => {
	 test("validate Schedule-example.json", () => {
		 const scheduleExample1 = require("../stu3-resources/Schedule-example.json");
		 expect(scheduleValidateFunction(scheduleExample1)).toBe(true);
	 });

	 test("validate Schedule-exampleloc1.json", () => {
		 const scheduleExample2 = require("../stu3-resources/Schedule-exampleloc1.json");
		 expect(scheduleValidateFunction(scheduleExample2)).toBe(true);
	 });

	 test("validate Schedule-exampleloc2.json", () => {
		 const scheduleExample3 = require("../stu3-resources/Schedule-exampleloc2.json");
		 expect(scheduleValidateFunction(scheduleExample3)).toBe(true);
	 });

});