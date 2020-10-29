const immunizationValidateFunction = require("../../r4/js/Immunization");

describe("Immunization", () => {
	 test("validate Immunization-example.json", () => {
		 const immunizationExample1 = require("../r4-resources/Immunization-example.json");
		 expect(immunizationValidateFunction(immunizationExample1)).toBe(true);
	 });

	 test("validate Immunization-historical.json", () => {
		 const immunizationExample2 = require("../r4-resources/Immunization-historical.json");
		 expect(immunizationValidateFunction(immunizationExample2)).toBe(true);
	 });

	 test("validate Immunization-notGiven.json", () => {
		 const immunizationExample3 = require("../r4-resources/Immunization-notGiven.json");
		 expect(immunizationValidateFunction(immunizationExample3)).toBe(true);
	 });

	 test("validate Immunization-protocol.json", () => {
		 const immunizationExample4 = require("../r4-resources/Immunization-protocol.json");
		 expect(immunizationValidateFunction(immunizationExample4)).toBe(true);
	 });

	 test("validate Immunization-subpotent.json", () => {
		 const immunizationExample5 = require("../r4-resources/Immunization-subpotent.json");
		 expect(immunizationValidateFunction(immunizationExample5)).toBe(true);
	 });

});