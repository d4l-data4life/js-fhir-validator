const plandefinitionValidateFunction = require("../../stu3/js/PlanDefinition");

describe("PlanDefinition", () => {
	 test("validate PlanDefinition-chlamydia-screening-intervention.json", () => {
		 const plandefinitionExample1 = require("../stu3-resources/PlanDefinition-chlamydia-screening-intervention.json");
		 expect(plandefinitionValidateFunction(plandefinitionExample1)).toBe(true);
	 });

	 test("validate PlanDefinition-exclusive-breastfeeding-intervention-01.json", () => {
		 const plandefinitionExample2 = require("../stu3-resources/PlanDefinition-exclusive-breastfeeding-intervention-01.json");
		 expect(plandefinitionValidateFunction(plandefinitionExample2)).toBe(true);
	 });

	 test("validate PlanDefinition-exclusive-breastfeeding-intervention-02.json", () => {
		 const plandefinitionExample3 = require("../stu3-resources/PlanDefinition-exclusive-breastfeeding-intervention-02.json");
		 expect(plandefinitionValidateFunction(plandefinitionExample3)).toBe(true);
	 });

	 test("validate PlanDefinition-exclusive-breastfeeding-intervention-03.json", () => {
		 const plandefinitionExample4 = require("../stu3-resources/PlanDefinition-exclusive-breastfeeding-intervention-03.json");
		 expect(plandefinitionValidateFunction(plandefinitionExample4)).toBe(true);
	 });

	 test("validate PlanDefinition-exclusive-breastfeeding-intervention-04.json", () => {
		 const plandefinitionExample5 = require("../stu3-resources/PlanDefinition-exclusive-breastfeeding-intervention-04.json");
		 expect(plandefinitionValidateFunction(plandefinitionExample5)).toBe(true);
	 });

	 test("validate PlanDefinition-zika-virus-intervention-initial.json", () => {
		 const plandefinitionExample6 = require("../stu3-resources/PlanDefinition-zika-virus-intervention-initial.json");
		 expect(plandefinitionValidateFunction(plandefinitionExample6)).toBe(true);
	 });

	 test("validate PlanDefinition-zika-virus-intervention.json", () => {
		 const plandefinitionExample7 = require("../stu3-resources/PlanDefinition-zika-virus-intervention.json");
		 expect(plandefinitionValidateFunction(plandefinitionExample7)).toBe(true);
	 });

});