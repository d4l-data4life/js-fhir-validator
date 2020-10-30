const allergyintoleranceValidateFunction = require("../../stu3/js/AllergyIntolerance");

describe("AllergyIntolerance", () => {
	 test("validate AllergyIntolerance-example.json", () => {
		 const allergyintoleranceExample1 = require("../stu3-resources/AllergyIntolerance-example.json");
		 expect(allergyintoleranceValidateFunction(allergyintoleranceExample1)).toBe(true);
	 });

	 test("validate AllergyIntolerance-fishallergy.json", () => {
		 const allergyintoleranceExample2 = require("../stu3-resources/AllergyIntolerance-fishallergy.json");
		 expect(allergyintoleranceValidateFunction(allergyintoleranceExample2)).toBe(true);
	 });

	 test("validate AllergyIntolerance-medication.json", () => {
		 const allergyintoleranceExample3 = require("../stu3-resources/AllergyIntolerance-medication.json");
		 expect(allergyintoleranceValidateFunction(allergyintoleranceExample3)).toBe(true);
	 });

});