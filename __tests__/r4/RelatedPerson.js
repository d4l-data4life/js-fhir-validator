const relatedpersonValidateFunction = require("../../r4/js/RelatedPerson");

describe("RelatedPerson", () => {
	 test("validate RelatedPerson-benedicte.json", () => {
		 const relatedpersonExample1 = require("../r4-resources/RelatedPerson-benedicte.json");
		 expect(relatedpersonValidateFunction(relatedpersonExample1)).toBe(true);
	 });

	 test("validate RelatedPerson-f001.json", () => {
		 const relatedpersonExample2 = require("../r4-resources/RelatedPerson-f001.json");
		 expect(relatedpersonValidateFunction(relatedpersonExample2)).toBe(true);
	 });

	 test("validate RelatedPerson-f002.json", () => {
		 const relatedpersonExample3 = require("../r4-resources/RelatedPerson-f002.json");
		 expect(relatedpersonValidateFunction(relatedpersonExample3)).toBe(true);
	 });

	 test("validate RelatedPerson-newborn-mom.json", () => {
		 const relatedpersonExample4 = require("../r4-resources/RelatedPerson-newborn-mom.json");
		 expect(relatedpersonValidateFunction(relatedpersonExample4)).toBe(true);
	 });

	 test("validate RelatedPerson-peter.json", () => {
		 const relatedpersonExample5 = require("../r4-resources/RelatedPerson-peter.json");
		 expect(relatedpersonValidateFunction(relatedpersonExample5)).toBe(true);
	 });

});