const taskValidateFunction = require("../../r4/js/Task");

describe("Task", () => {
	 test("validate Task-example2.json", () => {
		 const taskExample1 = require("../r4-resources/Task-example2.json");
		 expect(taskValidateFunction(taskExample1)).toBe(true);
	 });

	 test("validate Task-example3.json", () => {
		 const taskExample2 = require("../r4-resources/Task-example3.json");
		 expect(taskValidateFunction(taskExample2)).toBe(true);
	 });

	 test("validate Task-example4.json", () => {
		 const taskExample3 = require("../r4-resources/Task-example4.json");
		 expect(taskValidateFunction(taskExample3)).toBe(true);
	 });

	 test("validate Task-example5.json", () => {
		 const taskExample4 = require("../r4-resources/Task-example5.json");
		 expect(taskValidateFunction(taskExample4)).toBe(true);
	 });

	 test("validate Task-example6.json", () => {
		 const taskExample5 = require("../r4-resources/Task-example6.json");
		 expect(taskValidateFunction(taskExample5)).toBe(true);
	 });

	 test("validate Task-fm-example1.json", () => {
		 const taskExample6 = require("../r4-resources/Task-fm-example1.json");
		 expect(taskValidateFunction(taskExample6)).toBe(true);
	 });

	 test("validate Task-fm-example2.json", () => {
		 const taskExample7 = require("../r4-resources/Task-fm-example2.json");
		 expect(taskValidateFunction(taskExample7)).toBe(true);
	 });

	 test("validate Task-fm-example3.json", () => {
		 const taskExample8 = require("../r4-resources/Task-fm-example3.json");
		 expect(taskValidateFunction(taskExample8)).toBe(true);
	 });

	 test("validate Task-fm-example4.json", () => {
		 const taskExample9 = require("../r4-resources/Task-fm-example4.json");
		 expect(taskValidateFunction(taskExample9)).toBe(true);
	 });

	 test("validate Task-fm-example5.json", () => {
		 const taskExample10 = require("../r4-resources/Task-fm-example5.json");
		 expect(taskValidateFunction(taskExample10)).toBe(true);
	 });

	 test("validate Task-fm-example6.json", () => {
		 const taskExample11 = require("../r4-resources/Task-fm-example6.json");
		 expect(taskValidateFunction(taskExample11)).toBe(true);
	 });

});