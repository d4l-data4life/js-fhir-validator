const clinicalimpressionValidateFunction = require("../../r4/js/ClinicalImpression");

describe("ClinicalImpression", () => {
	 test("validate ClinicalImpression-example.json", () => {
		 const clinicalimpressionExample1 = require("../r4-resources/ClinicalImpression-example.json");
		 expect(clinicalimpressionValidateFunction(clinicalimpressionExample1)).toBe(true);
	 });

});