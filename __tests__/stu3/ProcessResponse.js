const processresponseValidateFunction = require("../../stu3/js/ProcessResponse");

describe("ProcessResponse", () => {
	 test("validate ProcessResponse-SR2349.json", () => {
		 const processresponseExample1 = require("../stu3-resources/ProcessResponse-SR2349.json");
		 expect(processresponseValidateFunction(processresponseExample1)).toBe(true);
	 });

	 test("validate ProcessResponse-SR2500.json", () => {
		 const processresponseExample2 = require("../stu3-resources/ProcessResponse-SR2500.json");
		 expect(processresponseValidateFunction(processresponseExample2)).toBe(true);
	 });

});