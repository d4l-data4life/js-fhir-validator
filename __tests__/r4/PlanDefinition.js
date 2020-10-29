const plandefinitionValidateFunction = require("../../r4/js/PlanDefinition");

describe("PlanDefinition", () => {
	 test("validate PlanDefinition-chlamydia-screening-intervention.json", () => {
		 const plandefinitionExample1 = require("../r4-resources/PlanDefinition-chlamydia-screening-intervention.json");
		 expect(plandefinitionValidateFunction(plandefinitionExample1)).toBe(true);
	 });

	 test("validate PlanDefinition-exclusive-breastfeeding-intervention-01.json", () => {
		 const plandefinitionExample2 = require("../r4-resources/PlanDefinition-exclusive-breastfeeding-intervention-01.json");
		 expect(plandefinitionValidateFunction(plandefinitionExample2)).toBe(true);
	 });

	 test("validate PlanDefinition-exclusive-breastfeeding-intervention-02.json", () => {
		 const plandefinitionExample3 = require("../r4-resources/PlanDefinition-exclusive-breastfeeding-intervention-02.json");
		 expect(plandefinitionValidateFunction(plandefinitionExample3)).toBe(true);
	 });

	 test("validate PlanDefinition-exclusive-breastfeeding-intervention-03.json", () => {
		 const plandefinitionExample4 = require("../r4-resources/PlanDefinition-exclusive-breastfeeding-intervention-03.json");
		 expect(plandefinitionValidateFunction(plandefinitionExample4)).toBe(true);
	 });

	 test("validate PlanDefinition-exclusive-breastfeeding-intervention-04.json", () => {
		 const plandefinitionExample5 = require("../r4-resources/PlanDefinition-exclusive-breastfeeding-intervention-04.json");
		 expect(plandefinitionValidateFunction(plandefinitionExample5)).toBe(true);
	 });

	 test("validate PlanDefinition-opioidcds-04.json", () => {
		 const plandefinitionExample6 = require("../r4-resources/PlanDefinition-opioidcds-04.json");
		 expect(plandefinitionValidateFunction(plandefinitionExample6)).toBe(true);
	 });

	 test("validate PlanDefinition-opioidcds-05.json", () => {
		 const plandefinitionExample7 = require("../r4-resources/PlanDefinition-opioidcds-05.json");
		 expect(plandefinitionValidateFunction(plandefinitionExample7)).toBe(true);
	 });

	 test("validate PlanDefinition-opioidcds-07.json", () => {
		 const plandefinitionExample8 = require("../r4-resources/PlanDefinition-opioidcds-07.json");
		 expect(plandefinitionValidateFunction(plandefinitionExample8)).toBe(true);
	 });

	 test("validate PlanDefinition-opioidcds-08.json", () => {
		 const plandefinitionExample9 = require("../r4-resources/PlanDefinition-opioidcds-08.json");
		 expect(plandefinitionValidateFunction(plandefinitionExample9)).toBe(true);
	 });

	 test("validate PlanDefinition-opioidcds-10.json", () => {
		 const plandefinitionExample10 = require("../r4-resources/PlanDefinition-opioidcds-10.json");
		 expect(plandefinitionValidateFunction(plandefinitionExample10)).toBe(true);
	 });

	 test("validate PlanDefinition-opioidcds-11.json", () => {
		 const plandefinitionExample11 = require("../r4-resources/PlanDefinition-opioidcds-11.json");
		 expect(plandefinitionValidateFunction(plandefinitionExample11)).toBe(true);
	 });

	 test("validate PlanDefinition-zika-virus-intervention-initial.json", () => {
		 const plandefinitionExample12 = require("../r4-resources/PlanDefinition-zika-virus-intervention-initial.json");
		 expect(plandefinitionValidateFunction(plandefinitionExample12)).toBe(true);
	 });

	 test("validate PlanDefinition-zika-virus-intervention.json", () => {
		 const plandefinitionExample13 = require("../r4-resources/PlanDefinition-zika-virus-intervention.json");
		 expect(plandefinitionValidateFunction(plandefinitionExample13)).toBe(true);
	 });

});