const servicedefinitionValidateFunction = require("../../stu3/js/ServiceDefinition");

describe("ServiceDefinition", () => {
	 test("validate ServiceDefinition-example.json", () => {
		 const servicedefinitionExample1 = require("../stu3-resources/ServiceDefinition-example.json");
		 expect(servicedefinitionValidateFunction(servicedefinitionExample1)).toBe(true);
	 });

	 test("validate ServiceDefinition-infobutton.json", () => {
		 const servicedefinitionExample2 = require("../stu3-resources/ServiceDefinition-infobutton.json");
		 expect(servicedefinitionValidateFunction(servicedefinitionExample2)).toBe(true);
	 });

});