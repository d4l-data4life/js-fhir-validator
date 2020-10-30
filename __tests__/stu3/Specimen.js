const specimenValidateFunction = require("../../stu3/js/Specimen");

describe("Specimen", () => {
	 test("validate Specimen-sst.json", () => {
		 const specimenExample1 = require("../stu3-resources/Specimen-sst.json");
		 expect(specimenValidateFunction(specimenExample1)).toBe(true);
	 });

	 test("validate Specimen-vma-urine.json", () => {
		 const specimenExample2 = require("../stu3-resources/Specimen-vma-urine.json");
		 expect(specimenValidateFunction(specimenExample2)).toBe(true);
	 });

});