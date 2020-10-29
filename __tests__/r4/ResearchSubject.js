const researchsubjectValidateFunction = require("../../r4/js/ResearchSubject");

describe("ResearchSubject", () => {
	 test("validate ResearchSubject-example.json", () => {
		 const researchsubjectExample1 = require("../r4-resources/ResearchSubject-example.json");
		 expect(researchsubjectValidateFunction(researchsubjectExample1)).toBe(true);
	 });

});