const measurereportValidateFunction = require("../../r4/js/MeasureReport");

describe("MeasureReport", () => {
	 test("validate MeasureReport-hiv-indicators.json", () => {
		 const measurereportExample1 = require("../r4-resources/MeasureReport-hiv-indicators.json");
		 expect(measurereportValidateFunction(measurereportExample1)).toBe(true);
	 });

});