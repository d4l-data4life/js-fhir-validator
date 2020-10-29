const locationValidateFunction = require("../../r4/js/Location");

describe("Location", () => {
	 test("validate Location-1.json", () => {
		 const locationExample1 = require("../r4-resources/Location-1.json");
		 expect(locationValidateFunction(locationExample1)).toBe(true);
	 });

	 test("validate Location-2.json", () => {
		 const locationExample2 = require("../r4-resources/Location-2.json");
		 expect(locationValidateFunction(locationExample2)).toBe(true);
	 });

	 test("validate Location-amb.json", () => {
		 const locationExample3 = require("../r4-resources/Location-amb.json");
		 expect(locationValidateFunction(locationExample3)).toBe(true);
	 });

	 test("validate Location-hl7.json", () => {
		 const locationExample4 = require("../r4-resources/Location-hl7.json");
		 expect(locationValidateFunction(locationExample4)).toBe(true);
	 });

	 test("validate Location-ph.json", () => {
		 const locationExample5 = require("../r4-resources/Location-ph.json");
		 expect(locationValidateFunction(locationExample5)).toBe(true);
	 });

	 test("validate Location-ukp.json", () => {
		 const locationExample6 = require("../r4-resources/Location-ukp.json");
		 expect(locationValidateFunction(locationExample6)).toBe(true);
	 });

});