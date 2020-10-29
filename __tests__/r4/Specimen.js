const specimenValidateFunction = require("../../r4/js/Specimen");

describe("Specimen", () => {
	 test("validate Specimen-pooled-serum.json", () => {
		 const specimenExample1 = require("../r4-resources/Specimen-pooled-serum.json");
		 expect(specimenValidateFunction(specimenExample1)).toBe(true);
	 });

	 test("validate Specimen-sst.json", () => {
		 const specimenExample2 = require("../r4-resources/Specimen-sst.json");
		 expect(specimenValidateFunction(specimenExample2)).toBe(true);
	 });

	 test("validate Specimen-vma-urine.json", () => {
		 const specimenExample3 = require("../r4-resources/Specimen-vma-urine.json");
		 expect(specimenValidateFunction(specimenExample3)).toBe(true);
	 });

});