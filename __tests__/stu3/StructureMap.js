const structuremapValidateFunction = require("../../stu3/js/StructureMap");

describe("StructureMap", () => {
	 test("validate StructureMap-example.json", () => {
		 const structuremapExample1 = require("../stu3-resources/StructureMap-example.json");
		 expect(structuremapValidateFunction(structuremapExample1)).toBe(true);
	 });

	 test("validate StructureMap-supplyrequest-transform.json", () => {
		 const structuremapExample2 = require("../stu3-resources/StructureMap-supplyrequest-transform.json");
		 expect(structuremapValidateFunction(structuremapExample2)).toBe(true);
	 });

});