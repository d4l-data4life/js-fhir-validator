const capabilitystatementValidateFunction = require("../../stu3/js/CapabilityStatement");

describe("CapabilityStatement", () => {
	 test("validate CapabilityStatement-base.json", () => {
		 const capabilitystatementExample1 = require("../stu3-resources/CapabilityStatement-base.json");
		 expect(capabilitystatementValidateFunction(capabilitystatementExample1)).toBe(true);
	 });

	 test("validate CapabilityStatement-base2.json", () => {
		 const capabilitystatementExample2 = require("../stu3-resources/CapabilityStatement-base2.json");
		 expect(capabilitystatementValidateFunction(capabilitystatementExample2)).toBe(true);
	 });

	 test("validate CapabilityStatement-example.json", () => {
		 const capabilitystatementExample3 = require("../stu3-resources/CapabilityStatement-example.json");
		 expect(capabilitystatementValidateFunction(capabilitystatementExample3)).toBe(true);
	 });

	 test("validate CapabilityStatement-knowledge-repository.json", () => {
		 const capabilitystatementExample4 = require("../stu3-resources/CapabilityStatement-knowledge-repository.json");
		 expect(capabilitystatementValidateFunction(capabilitystatementExample4)).toBe(true);
	 });

	 test("validate CapabilityStatement-measure-processor.json", () => {
		 const capabilitystatementExample5 = require("../stu3-resources/CapabilityStatement-measure-processor.json");
		 expect(capabilitystatementValidateFunction(capabilitystatementExample5)).toBe(true);
	 });

	 test("validate CapabilityStatement-messagedefinition.json", () => {
		 const capabilitystatementExample6 = require("../stu3-resources/CapabilityStatement-messagedefinition.json");
		 expect(capabilitystatementValidateFunction(capabilitystatementExample6)).toBe(true);
	 });

	 test("validate CapabilityStatement-phr.json", () => {
		 const capabilitystatementExample7 = require("../stu3-resources/CapabilityStatement-phr.json");
		 expect(capabilitystatementValidateFunction(capabilitystatementExample7)).toBe(true);
	 });

});