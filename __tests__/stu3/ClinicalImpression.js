const clinicalimpressionValidateFunction = require("../../stu3/js/ClinicalImpression");

describe("ClinicalImpression", () => {
	 test("validate ClinicalImpression-example.json", () => {
		 const clinicalimpressionExample1 = require("../stu3-resources/ClinicalImpression-example.json");
		 expect(clinicalimpressionValidateFunction(clinicalimpressionExample1)).toBe(true);
	 });

});