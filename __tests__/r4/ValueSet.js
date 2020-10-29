const valuesetValidateFunction = require("../../r4/js/ValueSet");

describe("ValueSet", () => {
	 test("validate ValueSet-all-distance-units.json", () => {
		 const valuesetExample1 = require("../r4-resources/ValueSet-all-distance-units.json");
		 expect(valuesetValidateFunction(valuesetExample1)).toBe(true);
	 });

	 test("validate ValueSet-all-time-units.json", () => {
		 const valuesetExample2 = require("../r4-resources/ValueSet-all-time-units.json");
		 expect(valuesetValidateFunction(valuesetExample2)).toBe(true);
	 });

	 test("validate ValueSet-iso3166-1-2.json", () => {
		 const valuesetExample3 = require("../r4-resources/ValueSet-iso3166-1-2.json");
		 expect(valuesetValidateFunction(valuesetExample3)).toBe(true);
	 });

	 test("validate ValueSet-iso3166-1-3.json", () => {
		 const valuesetExample4 = require("../r4-resources/ValueSet-iso3166-1-3.json");
		 expect(valuesetValidateFunction(valuesetExample4)).toBe(true);
	 });

	 test("validate ValueSet-iso3166-1-N.json", () => {
		 const valuesetExample5 = require("../r4-resources/ValueSet-iso3166-1-N.json");
		 expect(valuesetValidateFunction(valuesetExample5)).toBe(true);
	 });

	 test("validate ValueSet-performer-function.json", () => {
		 const valuesetExample6 = require("../r4-resources/ValueSet-performer-function.json");
		 expect(valuesetValidateFunction(valuesetExample6)).toBe(true);
	 });

	 test("validate ValueSet-written-language.json", () => {
		 const valuesetExample7 = require("../r4-resources/ValueSet-written-language.json");
		 expect(valuesetValidateFunction(valuesetExample7)).toBe(true);
	 });

});