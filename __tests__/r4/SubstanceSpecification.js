const substancespecificationValidateFunction = require("../../r4/js/SubstanceSpecification");

describe("SubstanceSpecification", () => {
	 test("validate SubstanceSpecification-example.json", () => {
		 const substancespecificationExample1 = require("../r4-resources/SubstanceSpecification-example.json");
		 expect(substancespecificationValidateFunction(substancespecificationExample1)).toBe(true);
	 });

});