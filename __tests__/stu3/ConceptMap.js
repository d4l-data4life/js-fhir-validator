const conceptmapValidateFunction = require("../../stu3/js/ConceptMap");

describe("ConceptMap", () => {
	 test("validate ConceptMap-101.json", () => {
		 const conceptmapExample1 = require("../stu3-resources/ConceptMap-101.json");
		 expect(conceptmapValidateFunction(conceptmapExample1)).toBe(true);
	 });

	 test("validate ConceptMap-102.json", () => {
		 const conceptmapExample2 = require("../stu3-resources/ConceptMap-102.json");
		 expect(conceptmapValidateFunction(conceptmapExample2)).toBe(true);
	 });

	 test("validate ConceptMap-103.json", () => {
		 const conceptmapExample3 = require("../stu3-resources/ConceptMap-103.json");
		 expect(conceptmapValidateFunction(conceptmapExample3)).toBe(true);
	 });

	 test("validate ConceptMap-cm-address-type-v3.json", () => {
		 const conceptmapExample4 = require("../stu3-resources/ConceptMap-cm-address-type-v3.json");
		 expect(conceptmapValidateFunction(conceptmapExample4)).toBe(true);
	 });

	 test("validate ConceptMap-cm-address-use-v2.json", () => {
		 const conceptmapExample5 = require("../stu3-resources/ConceptMap-cm-address-use-v2.json");
		 expect(conceptmapValidateFunction(conceptmapExample5)).toBe(true);
	 });

	 test("validate ConceptMap-cm-address-use-v3.json", () => {
		 const conceptmapExample6 = require("../stu3-resources/ConceptMap-cm-address-use-v3.json");
		 expect(conceptmapValidateFunction(conceptmapExample6)).toBe(true);
	 });

	 test("validate ConceptMap-cm-administrative-gender-v2.json", () => {
		 const conceptmapExample7 = require("../stu3-resources/ConceptMap-cm-administrative-gender-v2.json");
		 expect(conceptmapValidateFunction(conceptmapExample7)).toBe(true);
	 });

	 test("validate ConceptMap-cm-administrative-gender-v3.json", () => {
		 const conceptmapExample8 = require("../stu3-resources/ConceptMap-cm-administrative-gender-v3.json");
		 expect(conceptmapValidateFunction(conceptmapExample8)).toBe(true);
	 });

	 test("validate ConceptMap-cm-composition-status-v3.json", () => {
		 const conceptmapExample9 = require("../stu3-resources/ConceptMap-cm-composition-status-v3.json");
		 expect(conceptmapValidateFunction(conceptmapExample9)).toBe(true);
	 });

	 test("validate ConceptMap-cm-contact-point-system-v2.json", () => {
		 const conceptmapExample10 = require("../stu3-resources/ConceptMap-cm-contact-point-system-v2.json");
		 expect(conceptmapValidateFunction(conceptmapExample10)).toBe(true);
	 });

	 test("validate ConceptMap-cm-contact-point-use-v2.json", () => {
		 const conceptmapExample11 = require("../stu3-resources/ConceptMap-cm-contact-point-use-v2.json");
		 expect(conceptmapValidateFunction(conceptmapExample11)).toBe(true);
	 });

	 test("validate ConceptMap-cm-contact-point-use-v3.json", () => {
		 const conceptmapExample12 = require("../stu3-resources/ConceptMap-cm-contact-point-use-v3.json");
		 expect(conceptmapValidateFunction(conceptmapExample12)).toBe(true);
	 });

	 test("validate ConceptMap-cm-data-absent-reason-v3.json", () => {
		 const conceptmapExample13 = require("../stu3-resources/ConceptMap-cm-data-absent-reason-v3.json");
		 expect(conceptmapValidateFunction(conceptmapExample13)).toBe(true);
	 });

	 test("validate ConceptMap-cm-detectedissue-severity-v3.json", () => {
		 const conceptmapExample14 = require("../stu3-resources/ConceptMap-cm-detectedissue-severity-v3.json");
		 expect(conceptmapValidateFunction(conceptmapExample14)).toBe(true);
	 });

	 test("validate ConceptMap-cm-document-reference-status-v3.json", () => {
		 const conceptmapExample15 = require("../stu3-resources/ConceptMap-cm-document-reference-status-v3.json");
		 expect(conceptmapValidateFunction(conceptmapExample15)).toBe(true);
	 });

	 test("validate ConceptMap-cm-medication-admin-status-v3.json", () => {
		 const conceptmapExample16 = require("../stu3-resources/ConceptMap-cm-medication-admin-status-v3.json");
		 expect(conceptmapValidateFunction(conceptmapExample16)).toBe(true);
	 });

	 test("validate ConceptMap-cm-medication-dispense-status-v3.json", () => {
		 const conceptmapExample17 = require("../stu3-resources/ConceptMap-cm-medication-dispense-status-v3.json");
		 expect(conceptmapValidateFunction(conceptmapExample17)).toBe(true);
	 });

	 test("validate ConceptMap-cm-medication-request-status-v3.json", () => {
		 const conceptmapExample18 = require("../stu3-resources/ConceptMap-cm-medication-request-status-v3.json");
		 expect(conceptmapValidateFunction(conceptmapExample18)).toBe(true);
	 });

	 test("validate ConceptMap-cm-medication-statement-status-v3.json", () => {
		 const conceptmapExample19 = require("../stu3-resources/ConceptMap-cm-medication-statement-status-v3.json");
		 expect(conceptmapValidateFunction(conceptmapExample19)).toBe(true);
	 });

	 test("validate ConceptMap-cm-name-use-v2.json", () => {
		 const conceptmapExample20 = require("../stu3-resources/ConceptMap-cm-name-use-v2.json");
		 expect(conceptmapValidateFunction(conceptmapExample20)).toBe(true);
	 });

	 test("validate ConceptMap-cm-name-use-v3.json", () => {
		 const conceptmapExample21 = require("../stu3-resources/ConceptMap-cm-name-use-v3.json");
		 expect(conceptmapValidateFunction(conceptmapExample21)).toBe(true);
	 });

	 test("validate ConceptMap-cm-observation-relationshiptypes-v3.json", () => {
		 const conceptmapExample22 = require("../stu3-resources/ConceptMap-cm-observation-relationshiptypes-v3.json");
		 expect(conceptmapValidateFunction(conceptmapExample22)).toBe(true);
	 });

	 test("validate ConceptMap-example2.json", () => {
		 const conceptmapExample23 = require("../stu3-resources/ConceptMap-example2.json");
		 expect(conceptmapValidateFunction(conceptmapExample23)).toBe(true);
	 });

});