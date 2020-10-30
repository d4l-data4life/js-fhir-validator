const processrequestValidateFunction = require("../../stu3/js/ProcessRequest");

describe("ProcessRequest", () => {
	 test("validate ProcessRequest-1110.json", () => {
		 const processrequestExample1 = require("../stu3-resources/ProcessRequest-1110.json");
		 expect(processrequestValidateFunction(processrequestExample1)).toBe(true);
	 });

	 test("validate ProcessRequest-1111.json", () => {
		 const processrequestExample2 = require("../stu3-resources/ProcessRequest-1111.json");
		 expect(processrequestValidateFunction(processrequestExample2)).toBe(true);
	 });

	 test("validate ProcessRequest-1112.json", () => {
		 const processrequestExample3 = require("../stu3-resources/ProcessRequest-1112.json");
		 expect(processrequestValidateFunction(processrequestExample3)).toBe(true);
	 });

	 test("validate ProcessRequest-1113.json", () => {
		 const processrequestExample4 = require("../stu3-resources/ProcessRequest-1113.json");
		 expect(processrequestValidateFunction(processrequestExample4)).toBe(true);
	 });

	 test("validate ProcessRequest-1114.json", () => {
		 const processrequestExample5 = require("../stu3-resources/ProcessRequest-1114.json");
		 expect(processrequestValidateFunction(processrequestExample5)).toBe(true);
	 });

	 test("validate ProcessRequest-1115.json", () => {
		 const processrequestExample6 = require("../stu3-resources/ProcessRequest-1115.json");
		 expect(processrequestValidateFunction(processrequestExample6)).toBe(true);
	 });

	 test("validate ProcessRequest-44654.json", () => {
		 const processrequestExample7 = require("../stu3-resources/ProcessRequest-44654.json");
		 expect(processrequestValidateFunction(processrequestExample7)).toBe(true);
	 });

	 test("validate ProcessRequest-87654.json", () => {
		 const processrequestExample8 = require("../stu3-resources/ProcessRequest-87654.json");
		 expect(processrequestValidateFunction(processrequestExample8)).toBe(true);
	 });

	 test("validate ProcessRequest-87655.json", () => {
		 const processrequestExample9 = require("../stu3-resources/ProcessRequest-87655.json");
		 expect(processrequestValidateFunction(processrequestExample9)).toBe(true);
	 });

});