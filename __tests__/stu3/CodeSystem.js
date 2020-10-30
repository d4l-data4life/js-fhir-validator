const codesystemValidateFunction = require("../../stu3/js/CodeSystem");

describe("CodeSystem", () => {
	 test("validate CodeSystem-example.json", () => {
		 const codesystemExample1 = require("../stu3-resources/CodeSystem-example.json");
		 expect(codesystemValidateFunction(codesystemExample1)).toBe(true);
	 });

	 test("validate CodeSystem-nhin-purposeofuse.json", () => {
		 const codesystemExample2 = require("../stu3-resources/CodeSystem-nhin-purposeofuse.json");
		 expect(codesystemValidateFunction(codesystemExample2)).toBe(true);
	 });

	 test("validate CodeSystem-snomedct.json", () => {
		 const codesystemExample3 = require("../stu3-resources/CodeSystem-snomedct.json");
		 expect(codesystemValidateFunction(codesystemExample3)).toBe(true);
	 });

	 test("validate CodeSystem-summary.json", () => {
		 const codesystemExample4 = require("../stu3-resources/CodeSystem-summary.json");
		 expect(codesystemValidateFunction(codesystemExample4)).toBe(true);
	 });

});