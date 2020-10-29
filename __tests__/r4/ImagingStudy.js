const imagingstudyValidateFunction = require("../../r4/js/ImagingStudy");

describe("ImagingStudy", () => {
	 test("validate ImagingStudy-example-xr.json", () => {
		 const imagingstudyExample1 = require("../r4-resources/ImagingStudy-example-xr.json");
		 expect(imagingstudyValidateFunction(imagingstudyExample1)).toBe(true);
	 });

	 test("validate ImagingStudy-example.json", () => {
		 const imagingstudyExample2 = require("../r4-resources/ImagingStudy-example.json");
		 expect(imagingstudyValidateFunction(imagingstudyExample2)).toBe(true);
	 });

});