const measureValidateFunction = require("../../r4/js/Measure");

describe("Measure", () => {
	 test("validate Measure-component-a-example.json", () => {
		 const measureExample1 = require("../r4-resources/Measure-component-a-example.json");
		 expect(measureValidateFunction(measureExample1)).toBe(true);
	 });

	 test("validate Measure-component-b-example.json", () => {
		 const measureExample2 = require("../r4-resources/Measure-component-b-example.json");
		 expect(measureValidateFunction(measureExample2)).toBe(true);
	 });

	 test("validate Measure-composite-example.json", () => {
		 const measureExample3 = require("../r4-resources/Measure-composite-example.json");
		 expect(measureValidateFunction(measureExample3)).toBe(true);
	 });

	 test("validate Measure-hiv-indicators.json", () => {
		 const measureExample4 = require("../r4-resources/Measure-hiv-indicators.json");
		 expect(measureValidateFunction(measureExample4)).toBe(true);
	 });

	 test("validate Measure-measure-cms146-example.json", () => {
		 const measureExample5 = require("../r4-resources/Measure-measure-cms146-example.json");
		 expect(measureValidateFunction(measureExample5)).toBe(true);
	 });

	 test("validate Measure-measure-exclusive-breastfeeding.json", () => {
		 const measureExample6 = require("../r4-resources/Measure-measure-exclusive-breastfeeding.json");
		 expect(measureValidateFunction(measureExample6)).toBe(true);
	 });

	 test("validate Measure-measure-predecessor-example.json", () => {
		 const measureExample7 = require("../r4-resources/Measure-measure-predecessor-example.json");
		 expect(measureValidateFunction(measureExample7)).toBe(true);
	 });

});