const specimendefinitionValidateFunction = require("../../r4/js/SpecimenDefinition");

describe("SpecimenDefinition", () => {
	 test("validate SpecimenDefinition-2364.json", () => {
		 const specimendefinitionExample1 = require("../r4-resources/SpecimenDefinition-2364.json");
		 expect(specimendefinitionValidateFunction(specimendefinitionExample1)).toBe(true);
	 });

});