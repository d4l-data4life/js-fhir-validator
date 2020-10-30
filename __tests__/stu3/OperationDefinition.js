const operationdefinitionValidateFunction = require("../../stu3/js/OperationDefinition");

describe("OperationDefinition", () => {
	 test("validate OperationDefinition-ActivityDefinition-apply.json", () => {
		 const operationdefinitionExample1 = require("../stu3-resources/OperationDefinition-ActivityDefinition-apply.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample1)).toBe(true);
	 });

	 test("validate OperationDefinition-ActivityDefinition-data-requirements.json", () => {
		 const operationdefinitionExample2 = require("../stu3-resources/OperationDefinition-ActivityDefinition-data-requirements.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample2)).toBe(true);
	 });

	 test("validate OperationDefinition-CapabilityStatement-conforms.json", () => {
		 const operationdefinitionExample3 = require("../stu3-resources/OperationDefinition-CapabilityStatement-conforms.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample3)).toBe(true);
	 });

	 test("validate OperationDefinition-CapabilityStatement-implements.json", () => {
		 const operationdefinitionExample4 = require("../stu3-resources/OperationDefinition-CapabilityStatement-implements.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample4)).toBe(true);
	 });

	 test("validate OperationDefinition-CapabilityStatement-subset.json", () => {
		 const operationdefinitionExample5 = require("../stu3-resources/OperationDefinition-CapabilityStatement-subset.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample5)).toBe(true);
	 });

	 test("validate OperationDefinition-CodeSystem-compose.json", () => {
		 const operationdefinitionExample6 = require("../stu3-resources/OperationDefinition-CodeSystem-compose.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample6)).toBe(true);
	 });

	 test("validate OperationDefinition-CodeSystem-lookup.json", () => {
		 const operationdefinitionExample7 = require("../stu3-resources/OperationDefinition-CodeSystem-lookup.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample7)).toBe(true);
	 });

	 test("validate OperationDefinition-CodeSystem-subsumes.json", () => {
		 const operationdefinitionExample8 = require("../stu3-resources/OperationDefinition-CodeSystem-subsumes.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample8)).toBe(true);
	 });

	 test("validate OperationDefinition-Composition-document.json", () => {
		 const operationdefinitionExample9 = require("../stu3-resources/OperationDefinition-Composition-document.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample9)).toBe(true);
	 });

	 test("validate OperationDefinition-ConceptMap-closure.json", () => {
		 const operationdefinitionExample10 = require("../stu3-resources/OperationDefinition-ConceptMap-closure.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample10)).toBe(true);
	 });

	 test("validate OperationDefinition-ConceptMap-translate.json", () => {
		 const operationdefinitionExample11 = require("../stu3-resources/OperationDefinition-ConceptMap-translate.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample11)).toBe(true);
	 });

	 test("validate OperationDefinition-Encounter-everything.json", () => {
		 const operationdefinitionExample12 = require("../stu3-resources/OperationDefinition-Encounter-everything.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample12)).toBe(true);
	 });

	 test("validate OperationDefinition-Library-data-requirements.json", () => {
		 const operationdefinitionExample13 = require("../stu3-resources/OperationDefinition-Library-data-requirements.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample13)).toBe(true);
	 });

	 test("validate OperationDefinition-List-find.json", () => {
		 const operationdefinitionExample14 = require("../stu3-resources/OperationDefinition-List-find.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample14)).toBe(true);
	 });

	 test("validate OperationDefinition-Measure-data-requirements.json", () => {
		 const operationdefinitionExample15 = require("../stu3-resources/OperationDefinition-Measure-data-requirements.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample15)).toBe(true);
	 });

	 test("validate OperationDefinition-Measure-evaluate-measure.json", () => {
		 const operationdefinitionExample16 = require("../stu3-resources/OperationDefinition-Measure-evaluate-measure.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample16)).toBe(true);
	 });

	 test("validate OperationDefinition-MessageHeader-process-message.json", () => {
		 const operationdefinitionExample17 = require("../stu3-resources/OperationDefinition-MessageHeader-process-message.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample17)).toBe(true);
	 });

	 test("validate OperationDefinition-Observation-lastn.json", () => {
		 const operationdefinitionExample18 = require("../stu3-resources/OperationDefinition-Observation-lastn.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample18)).toBe(true);
	 });

	 test("validate OperationDefinition-Observation-stats.json", () => {
		 const operationdefinitionExample19 = require("../stu3-resources/OperationDefinition-Observation-stats.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample19)).toBe(true);
	 });

	 test("validate OperationDefinition-Patient-everything.json", () => {
		 const operationdefinitionExample20 = require("../stu3-resources/OperationDefinition-Patient-everything.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample20)).toBe(true);
	 });

	 test("validate OperationDefinition-Patient-match.json", () => {
		 const operationdefinitionExample21 = require("../stu3-resources/OperationDefinition-Patient-match.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample21)).toBe(true);
	 });

	 test("validate OperationDefinition-PlanDefinition-apply.json", () => {
		 const operationdefinitionExample22 = require("../stu3-resources/OperationDefinition-PlanDefinition-apply.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample22)).toBe(true);
	 });

	 test("validate OperationDefinition-PlanDefinition-data-requirements.json", () => {
		 const operationdefinitionExample23 = require("../stu3-resources/OperationDefinition-PlanDefinition-data-requirements.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample23)).toBe(true);
	 });

	 test("validate OperationDefinition-Questionnaire-populate.json", () => {
		 const operationdefinitionExample24 = require("../stu3-resources/OperationDefinition-Questionnaire-populate.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample24)).toBe(true);
	 });

	 test("validate OperationDefinition-Questionnaire-populatehtml.json", () => {
		 const operationdefinitionExample25 = require("../stu3-resources/OperationDefinition-Questionnaire-populatehtml.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample25)).toBe(true);
	 });

	 test("validate OperationDefinition-Questionnaire-populatelink.json", () => {
		 const operationdefinitionExample26 = require("../stu3-resources/OperationDefinition-Questionnaire-populatelink.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample26)).toBe(true);
	 });

	 test("validate OperationDefinition-Resource-meta-add.json", () => {
		 const operationdefinitionExample27 = require("../stu3-resources/OperationDefinition-Resource-meta-add.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample27)).toBe(true);
	 });

	 test("validate OperationDefinition-Resource-meta-delete.json", () => {
		 const operationdefinitionExample28 = require("../stu3-resources/OperationDefinition-Resource-meta-delete.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample28)).toBe(true);
	 });

	 test("validate OperationDefinition-Resource-meta.json", () => {
		 const operationdefinitionExample29 = require("../stu3-resources/OperationDefinition-Resource-meta.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample29)).toBe(true);
	 });

	 test("validate OperationDefinition-Resource-validate.json", () => {
		 const operationdefinitionExample30 = require("../stu3-resources/OperationDefinition-Resource-validate.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample30)).toBe(true);
	 });

	 test("validate OperationDefinition-ServiceDefinition-data-requirements.json", () => {
		 const operationdefinitionExample31 = require("../stu3-resources/OperationDefinition-ServiceDefinition-data-requirements.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample31)).toBe(true);
	 });

	 test("validate OperationDefinition-ServiceDefinition-evaluate.json", () => {
		 const operationdefinitionExample32 = require("../stu3-resources/OperationDefinition-ServiceDefinition-evaluate.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample32)).toBe(true);
	 });

	 test("validate OperationDefinition-StructureDefinition-questionnaire.json", () => {
		 const operationdefinitionExample33 = require("../stu3-resources/OperationDefinition-StructureDefinition-questionnaire.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample33)).toBe(true);
	 });

	 test("validate OperationDefinition-StructureMap-transform.json", () => {
		 const operationdefinitionExample34 = require("../stu3-resources/OperationDefinition-StructureMap-transform.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample34)).toBe(true);
	 });

	 test("validate OperationDefinition-ValueSet-expand.json", () => {
		 const operationdefinitionExample35 = require("../stu3-resources/OperationDefinition-ValueSet-expand.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample35)).toBe(true);
	 });

	 test("validate OperationDefinition-ValueSet-validate-code.json", () => {
		 const operationdefinitionExample36 = require("../stu3-resources/OperationDefinition-ValueSet-validate-code.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample36)).toBe(true);
	 });

	 test("validate OperationDefinition-example.json", () => {
		 const operationdefinitionExample37 = require("../stu3-resources/OperationDefinition-example.json");
		 expect(operationdefinitionValidateFunction(operationdefinitionExample37)).toBe(true);
	 });

});