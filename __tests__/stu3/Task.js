const taskValidateFunction = require("../../stu3/js/Task");

describe("Task", () => {
	 test("validate Task-example2.json", () => {
		 const taskExample1 = require("../stu3-resources/Task-example2.json");
		 expect(taskValidateFunction(taskExample1)).toBe(true);
	 });

	 test("validate Task-example3.json", () => {
		 const taskExample2 = require("../stu3-resources/Task-example3.json");
		 expect(taskValidateFunction(taskExample2)).toBe(true);
	 });

	 test("validate Task-example4.json", () => {
		 const taskExample3 = require("../stu3-resources/Task-example4.json");
		 expect(taskValidateFunction(taskExample3)).toBe(true);
	 });

	 test("validate Task-example5.json", () => {
		 const taskExample4 = require("../stu3-resources/Task-example5.json");
		 expect(taskValidateFunction(taskExample4)).toBe(true);
	 });

	 test("validate Task-example6.json", () => {
		 const taskExample5 = require("../stu3-resources/Task-example6.json");
		 expect(taskValidateFunction(taskExample5)).toBe(true);
	 });

});