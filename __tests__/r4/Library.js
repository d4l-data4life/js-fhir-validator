const libraryValidateFunction = require("../../r4/js/Library");

describe("Library", () => {
	 test("validate Library-composition-example.json", () => {
		 const libraryExample1 = require("../r4-resources/Library-composition-example.json");
		 expect(libraryValidateFunction(libraryExample1)).toBe(true);
	 });

	 test("validate Library-example.json", () => {
		 const libraryExample2 = require("../r4-resources/Library-example.json");
		 expect(libraryValidateFunction(libraryExample2)).toBe(true);
	 });

	 test("validate Library-hiv-indicators.json", () => {
		 const libraryExample3 = require("../r4-resources/Library-hiv-indicators.json");
		 expect(libraryValidateFunction(libraryExample3)).toBe(true);
	 });

	 test("validate Library-library-cms146-example.json", () => {
		 const libraryExample4 = require("../r4-resources/Library-library-cms146-example.json");
		 expect(libraryValidateFunction(libraryExample4)).toBe(true);
	 });

	 test("validate Library-library-exclusive-breastfeeding-cds-logic.json", () => {
		 const libraryExample5 = require("../r4-resources/Library-library-exclusive-breastfeeding-cds-logic.json");
		 expect(libraryValidateFunction(libraryExample5)).toBe(true);
	 });

	 test("validate Library-library-exclusive-breastfeeding-cqm-logic.json", () => {
		 const libraryExample6 = require("../r4-resources/Library-library-exclusive-breastfeeding-cqm-logic.json");
		 expect(libraryValidateFunction(libraryExample6)).toBe(true);
	 });

	 test("validate Library-library-fhir-helpers-predecessor.json", () => {
		 const libraryExample7 = require("../r4-resources/Library-library-fhir-helpers-predecessor.json");
		 expect(libraryValidateFunction(libraryExample7)).toBe(true);
	 });

	 test("validate Library-library-fhir-helpers.json", () => {
		 const libraryExample8 = require("../r4-resources/Library-library-fhir-helpers.json");
		 expect(libraryValidateFunction(libraryExample8)).toBe(true);
	 });

	 test("validate Library-library-fhir-model-definition.json", () => {
		 const libraryExample9 = require("../r4-resources/Library-library-fhir-model-definition.json");
		 expect(libraryValidateFunction(libraryExample9)).toBe(true);
	 });

	 test("validate Library-library-quick-model-definition.json", () => {
		 const libraryExample10 = require("../r4-resources/Library-library-quick-model-definition.json");
		 expect(libraryValidateFunction(libraryExample10)).toBe(true);
	 });

	 test("validate Library-omtk-logic.json", () => {
		 const libraryExample11 = require("../r4-resources/Library-omtk-logic.json");
		 expect(libraryValidateFunction(libraryExample11)).toBe(true);
	 });

	 test("validate Library-omtk-modelinfo.json", () => {
		 const libraryExample12 = require("../r4-resources/Library-omtk-modelinfo.json");
		 expect(libraryValidateFunction(libraryExample12)).toBe(true);
	 });

	 test("validate Library-opioidcds-common.json", () => {
		 const libraryExample13 = require("../r4-resources/Library-opioidcds-common.json");
		 expect(libraryValidateFunction(libraryExample13)).toBe(true);
	 });

	 test("validate Library-opioidcds-recommendation-04.json", () => {
		 const libraryExample14 = require("../r4-resources/Library-opioidcds-recommendation-04.json");
		 expect(libraryValidateFunction(libraryExample14)).toBe(true);
	 });

	 test("validate Library-opioidcds-recommendation-05.json", () => {
		 const libraryExample15 = require("../r4-resources/Library-opioidcds-recommendation-05.json");
		 expect(libraryValidateFunction(libraryExample15)).toBe(true);
	 });

	 test("validate Library-opioidcds-recommendation-07.json", () => {
		 const libraryExample16 = require("../r4-resources/Library-opioidcds-recommendation-07.json");
		 expect(libraryValidateFunction(libraryExample16)).toBe(true);
	 });

	 test("validate Library-opioidcds-recommendation-08.json", () => {
		 const libraryExample17 = require("../r4-resources/Library-opioidcds-recommendation-08.json");
		 expect(libraryValidateFunction(libraryExample17)).toBe(true);
	 });

	 test("validate Library-opioidcds-recommendation-10.json", () => {
		 const libraryExample18 = require("../r4-resources/Library-opioidcds-recommendation-10.json");
		 expect(libraryValidateFunction(libraryExample18)).toBe(true);
	 });

	 test("validate Library-opioidcds-recommendation-11.json", () => {
		 const libraryExample19 = require("../r4-resources/Library-opioidcds-recommendation-11.json");
		 expect(libraryValidateFunction(libraryExample19)).toBe(true);
	 });

	 test("validate Library-suiciderisk-orderset-logic.json", () => {
		 const libraryExample20 = require("../r4-resources/Library-suiciderisk-orderset-logic.json");
		 expect(libraryValidateFunction(libraryExample20)).toBe(true);
	 });

	 test("validate Library-zika-virus-intervention-logic.json", () => {
		 const libraryExample21 = require("../r4-resources/Library-zika-virus-intervention-logic.json");
		 expect(libraryValidateFunction(libraryExample21)).toBe(true);
	 });

});