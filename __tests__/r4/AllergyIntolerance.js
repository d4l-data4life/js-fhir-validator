const allergyintoleranceValidateFunction = require("../../r4/js/AllergyIntolerance");

describe("AllergyIntolerance", () => {
	 test("validate AllergyIntolerance-example.json", () => {
		 const allergyintoleranceExample1 = require("../r4-resources/AllergyIntolerance-example.json");
		 expect(allergyintoleranceValidateFunction(allergyintoleranceExample1)).toBe(true);
	 });

	 test("validate AllergyIntolerance-fishallergy.json", () => {
		 const allergyintoleranceExample2 = require("../r4-resources/AllergyIntolerance-fishallergy.json");
		 expect(allergyintoleranceValidateFunction(allergyintoleranceExample2)).toBe(true);
	 });

	 test("validate AllergyIntolerance-medication.json", () => {
		 const allergyintoleranceExample3 = require("../r4-resources/AllergyIntolerance-medication.json");
		 expect(allergyintoleranceValidateFunction(allergyintoleranceExample3)).toBe(true);
	 });

	 test("validate AllergyIntolerance-nka.json", () => {
		 const allergyintoleranceExample4 = require("../r4-resources/AllergyIntolerance-nka.json");
		 expect(allergyintoleranceValidateFunction(allergyintoleranceExample4)).toBe(true);
	 });

	 test("validate AllergyIntolerance-nkda.json", () => {
		 const allergyintoleranceExample5 = require("../r4-resources/AllergyIntolerance-nkda.json");
		 expect(allergyintoleranceValidateFunction(allergyintoleranceExample5)).toBe(true);
	 });

	 test("validate AllergyIntolerance-nkla.json", () => {
		 const allergyintoleranceExample6 = require("../r4-resources/AllergyIntolerance-nkla.json");
		 expect(allergyintoleranceValidateFunction(allergyintoleranceExample6)).toBe(true);
	 });

});