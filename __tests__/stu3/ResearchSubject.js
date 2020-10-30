const researchsubjectValidateFunction = require("../../stu3/js/ResearchSubject");

describe("ResearchSubject", () => {
	 test("validate ResearchSubject-example.json", () => {
		 const researchsubjectExample1 = require("../stu3-resources/ResearchSubject-example.json");
		 expect(researchsubjectValidateFunction(researchsubjectExample1)).toBe(true);
	 });

});