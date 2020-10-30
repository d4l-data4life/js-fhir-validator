const relatedpersonValidateFunction = require("../../stu3/js/RelatedPerson");

describe("RelatedPerson", () => {
	 test("validate RelatedPerson-benedicte.json", () => {
		 const relatedpersonExample1 = require("../stu3-resources/RelatedPerson-benedicte.json");
		 expect(relatedpersonValidateFunction(relatedpersonExample1)).toBe(true);
	 });

	 test("validate RelatedPerson-f001.json", () => {
		 const relatedpersonExample2 = require("../stu3-resources/RelatedPerson-f001.json");
		 expect(relatedpersonValidateFunction(relatedpersonExample2)).toBe(true);
	 });

	 test("validate RelatedPerson-f002.json", () => {
		 const relatedpersonExample3 = require("../stu3-resources/RelatedPerson-f002.json");
		 expect(relatedpersonValidateFunction(relatedpersonExample3)).toBe(true);
	 });

	 test("validate RelatedPerson-peter.json", () => {
		 const relatedpersonExample4 = require("../stu3-resources/RelatedPerson-peter.json");
		 expect(relatedpersonValidateFunction(relatedpersonExample4)).toBe(true);
	 });

});