const libraryValidateFunction = require("../../stu3/js/Library");

describe("Library", () => {
	 test("validate Library-composition-example.json", () => {
		 const libraryExample1 = require("../stu3-resources/Library-composition-example.json");
		 expect(libraryValidateFunction(libraryExample1)).toBe(true);
	 });

	 test("validate Library-example.json", () => {
		 const libraryExample2 = require("../stu3-resources/Library-example.json");
		 expect(libraryValidateFunction(libraryExample2)).toBe(true);
	 });

	 test("validate Library-library-cms146-example.json", () => {
		 const libraryExample3 = require("../stu3-resources/Library-library-cms146-example.json");
		 expect(libraryValidateFunction(libraryExample3)).toBe(true);
	 });

	 test("validate Library-library-exclusive-breastfeeding-cds-logic.json", () => {
		 const libraryExample4 = require("../stu3-resources/Library-library-exclusive-breastfeeding-cds-logic.json");
		 expect(libraryValidateFunction(libraryExample4)).toBe(true);
	 });

	 test("validate Library-library-exclusive-breastfeeding-cqm-logic.json", () => {
		 const libraryExample5 = require("../stu3-resources/Library-library-exclusive-breastfeeding-cqm-logic.json");
		 expect(libraryValidateFunction(libraryExample5)).toBe(true);
	 });

	 test("validate Library-library-fhir-helpers-predecessor.json", () => {
		 const libraryExample6 = require("../stu3-resources/Library-library-fhir-helpers-predecessor.json");
		 expect(libraryValidateFunction(libraryExample6)).toBe(true);
	 });

	 test("validate Library-library-fhir-helpers.json", () => {
		 const libraryExample7 = require("../stu3-resources/Library-library-fhir-helpers.json");
		 expect(libraryValidateFunction(libraryExample7)).toBe(true);
	 });

	 test("validate Library-library-fhir-model-definition.json", () => {
		 const libraryExample8 = require("../stu3-resources/Library-library-fhir-model-definition.json");
		 expect(libraryValidateFunction(libraryExample8)).toBe(true);
	 });

	 test("validate Library-library-quick-model-definition.json", () => {
		 const libraryExample9 = require("../stu3-resources/Library-library-quick-model-definition.json");
		 expect(libraryValidateFunction(libraryExample9)).toBe(true);
	 });

	 test("validate Library-suiciderisk-orderset-logic.json", () => {
		 const libraryExample10 = require("../stu3-resources/Library-suiciderisk-orderset-logic.json");
		 expect(libraryValidateFunction(libraryExample10)).toBe(true);
	 });

	 test("validate Library-zika-virus-intervention-logic.json", () => {
		 const libraryExample11 = require("../stu3-resources/Library-zika-virus-intervention-logic.json");
		 expect(libraryValidateFunction(libraryExample11)).toBe(true);
	 });

});