const locationValidateFunction = require("../../stu3/js/Location");

describe("Location", () => {
	 test("validate Location-2.json", () => {
		 const locationExample1 = require("../stu3-resources/Location-2.json");
		 expect(locationValidateFunction(locationExample1)).toBe(true);
	 });

	 test("validate Location-amb.json", () => {
		 const locationExample2 = require("../stu3-resources/Location-amb.json");
		 expect(locationValidateFunction(locationExample2)).toBe(true);
	 });

	 test("validate Location-hl7.json", () => {
		 const locationExample3 = require("../stu3-resources/Location-hl7.json");
		 expect(locationValidateFunction(locationExample3)).toBe(true);
	 });

	 test("validate Location-ph.json", () => {
		 const locationExample4 = require("../stu3-resources/Location-ph.json");
		 expect(locationValidateFunction(locationExample4)).toBe(true);
	 });

	 test("validate Location-ukp.json", () => {
		 const locationExample5 = require("../stu3-resources/Location-ukp.json");
		 expect(locationValidateFunction(locationExample5)).toBe(true);
	 });

});