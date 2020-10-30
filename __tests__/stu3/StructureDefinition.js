const structuredefinitionValidateFunction = require("../../stu3/js/StructureDefinition");

describe("StructureDefinition", () => {
	 test("validate StructureDefinition-Definition.json", () => {
		 const structuredefinitionExample1 = require("../stu3-resources/StructureDefinition-Definition.json");
		 expect(structuredefinitionValidateFunction(structuredefinitionExample1)).toBe(true);
	 });

	 test("validate StructureDefinition-Event.json", () => {
		 const structuredefinitionExample2 = require("../stu3-resources/StructureDefinition-Event.json");
		 expect(structuredefinitionValidateFunction(structuredefinitionExample2)).toBe(true);
	 });

	 test("validate StructureDefinition-Request.json", () => {
		 const structuredefinitionExample3 = require("../stu3-resources/StructureDefinition-Request.json");
		 expect(structuredefinitionValidateFunction(structuredefinitionExample3)).toBe(true);
	 });

	 test("validate StructureDefinition-example.json", () => {
		 const structuredefinitionExample4 = require("../stu3-resources/StructureDefinition-example.json");
		 expect(structuredefinitionValidateFunction(structuredefinitionExample4)).toBe(true);
	 });

});