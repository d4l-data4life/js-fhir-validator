const nutritionorderValidateFunction = require("../../r4/js/NutritionOrder");

describe("NutritionOrder", () => {
	 test("validate NutritionOrder-cardiacdiet.json", () => {
		 const nutritionorderExample1 = require("../r4-resources/NutritionOrder-cardiacdiet.json");
		 expect(nutritionorderValidateFunction(nutritionorderExample1)).toBe(true);
	 });

	 test("validate NutritionOrder-diabeticdiet.json", () => {
		 const nutritionorderExample2 = require("../r4-resources/NutritionOrder-diabeticdiet.json");
		 expect(nutritionorderValidateFunction(nutritionorderExample2)).toBe(true);
	 });

	 test("validate NutritionOrder-diabeticsupplement.json", () => {
		 const nutritionorderExample3 = require("../r4-resources/NutritionOrder-diabeticsupplement.json");
		 expect(nutritionorderValidateFunction(nutritionorderExample3)).toBe(true);
	 });

	 test("validate NutritionOrder-energysupplement.json", () => {
		 const nutritionorderExample4 = require("../r4-resources/NutritionOrder-energysupplement.json");
		 expect(nutritionorderValidateFunction(nutritionorderExample4)).toBe(true);
	 });

	 test("validate NutritionOrder-enteralbolus.json", () => {
		 const nutritionorderExample5 = require("../r4-resources/NutritionOrder-enteralbolus.json");
		 expect(nutritionorderValidateFunction(nutritionorderExample5)).toBe(true);
	 });

	 test("validate NutritionOrder-enteralcontinuous.json", () => {
		 const nutritionorderExample6 = require("../r4-resources/NutritionOrder-enteralcontinuous.json");
		 expect(nutritionorderValidateFunction(nutritionorderExample6)).toBe(true);
	 });

	 test("validate NutritionOrder-fiberrestricteddiet.json", () => {
		 const nutritionorderExample7 = require("../r4-resources/NutritionOrder-fiberrestricteddiet.json");
		 expect(nutritionorderValidateFunction(nutritionorderExample7)).toBe(true);
	 });

	 test("validate NutritionOrder-infantenteral.json", () => {
		 const nutritionorderExample8 = require("../r4-resources/NutritionOrder-infantenteral.json");
		 expect(nutritionorderValidateFunction(nutritionorderExample8)).toBe(true);
	 });

	 test("validate NutritionOrder-proteinsupplement.json", () => {
		 const nutritionorderExample9 = require("../r4-resources/NutritionOrder-proteinsupplement.json");
		 expect(nutritionorderValidateFunction(nutritionorderExample9)).toBe(true);
	 });

	 test("validate NutritionOrder-pureeddiet-simple.json", () => {
		 const nutritionorderExample10 = require("../r4-resources/NutritionOrder-pureeddiet-simple.json");
		 expect(nutritionorderValidateFunction(nutritionorderExample10)).toBe(true);
	 });

	 test("validate NutritionOrder-pureeddiet.json", () => {
		 const nutritionorderExample11 = require("../r4-resources/NutritionOrder-pureeddiet.json");
		 expect(nutritionorderValidateFunction(nutritionorderExample11)).toBe(true);
	 });

	 test("validate NutritionOrder-renaldiet.json", () => {
		 const nutritionorderExample12 = require("../r4-resources/NutritionOrder-renaldiet.json");
		 expect(nutritionorderValidateFunction(nutritionorderExample12)).toBe(true);
	 });

	 test("validate NutritionOrder-texturemodified.json", () => {
		 const nutritionorderExample13 = require("../r4-resources/NutritionOrder-texturemodified.json");
		 expect(nutritionorderValidateFunction(nutritionorderExample13)).toBe(true);
	 });

});