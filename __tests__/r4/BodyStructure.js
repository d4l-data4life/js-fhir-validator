const bodystructureValidateFunction = require("../../r4/js/BodyStructure");

describe("BodyStructure", () => {
	 test("validate BodyStructure-fetus.json", () => {
		 const bodystructureExample1 = require("../r4-resources/BodyStructure-fetus.json");
		 expect(bodystructureValidateFunction(bodystructureExample1)).toBe(true);
	 });

	 test("validate BodyStructure-skin-patch.json", () => {
		 const bodystructureExample2 = require("../r4-resources/BodyStructure-skin-patch.json");
		 expect(bodystructureValidateFunction(bodystructureExample2)).toBe(true);
	 });

	 test("validate BodyStructure-tumor.json", () => {
		 const bodystructureExample3 = require("../r4-resources/BodyStructure-tumor.json");
		 expect(bodystructureValidateFunction(bodystructureExample3)).toBe(true);
	 });

});