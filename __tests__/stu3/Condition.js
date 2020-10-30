const conditionValidateFunction = require("../../stu3/js/Condition");

describe("Condition", () => {
	 test("validate Condition-example.json", () => {
		 const conditionExample1 = require("../stu3-resources/Condition-example.json");
		 expect(conditionValidateFunction(conditionExample1)).toBe(true);
	 });

	 test("validate Condition-example2.json", () => {
		 const conditionExample2 = require("../stu3-resources/Condition-example2.json");
		 expect(conditionValidateFunction(conditionExample2)).toBe(true);
	 });

	 test("validate Condition-f001.json", () => {
		 const conditionExample3 = require("../stu3-resources/Condition-f001.json");
		 expect(conditionValidateFunction(conditionExample3)).toBe(true);
	 });

	 test("validate Condition-f002.json", () => {
		 const conditionExample4 = require("../stu3-resources/Condition-f002.json");
		 expect(conditionValidateFunction(conditionExample4)).toBe(true);
	 });

	 test("validate Condition-f003.json", () => {
		 const conditionExample5 = require("../stu3-resources/Condition-f003.json");
		 expect(conditionValidateFunction(conditionExample5)).toBe(true);
	 });

	 test("validate Condition-f201.json", () => {
		 const conditionExample6 = require("../stu3-resources/Condition-f201.json");
		 expect(conditionValidateFunction(conditionExample6)).toBe(true);
	 });

	 test("validate Condition-f202.json", () => {
		 const conditionExample7 = require("../stu3-resources/Condition-f202.json");
		 expect(conditionValidateFunction(conditionExample7)).toBe(true);
	 });

	 test("validate Condition-f203.json", () => {
		 const conditionExample8 = require("../stu3-resources/Condition-f203.json");
		 expect(conditionValidateFunction(conditionExample8)).toBe(true);
	 });

	 test("validate Condition-f204.json", () => {
		 const conditionExample9 = require("../stu3-resources/Condition-f204.json");
		 expect(conditionValidateFunction(conditionExample9)).toBe(true);
	 });

	 test("validate Condition-f205.json", () => {
		 const conditionExample10 = require("../stu3-resources/Condition-f205.json");
		 expect(conditionValidateFunction(conditionExample10)).toBe(true);
	 });

	 test("validate Condition-family-history.json", () => {
		 const conditionExample11 = require("../stu3-resources/Condition-family-history.json");
		 expect(conditionValidateFunction(conditionExample11)).toBe(true);
	 });

	 test("validate Condition-stroke.json", () => {
		 const conditionExample12 = require("../stu3-resources/Condition-stroke.json");
		 expect(conditionValidateFunction(conditionExample12)).toBe(true);
	 });

});