const sequenceValidateFunction = require("../../stu3/js/Sequence");

describe("Sequence", () => {
	 test("validate Sequence-coord-0-base.json", () => {
		 const sequenceExample1 = require("../stu3-resources/Sequence-coord-0-base.json");
		 expect(sequenceValidateFunction(sequenceExample1)).toBe(true);
	 });

	 test("validate Sequence-coord-1-base.json", () => {
		 const sequenceExample2 = require("../stu3-resources/Sequence-coord-1-base.json");
		 expect(sequenceValidateFunction(sequenceExample2)).toBe(true);
	 });

	 test("validate Sequence-example-TPMT-one.json", () => {
		 const sequenceExample3 = require("../stu3-resources/Sequence-example-TPMT-one.json");
		 expect(sequenceValidateFunction(sequenceExample3)).toBe(true);
	 });

	 test("validate Sequence-example-TPMT-two.json", () => {
		 const sequenceExample4 = require("../stu3-resources/Sequence-example-TPMT-two.json");
		 expect(sequenceValidateFunction(sequenceExample4)).toBe(true);
	 });

	 test("validate Sequence-example-pgx-1.json", () => {
		 const sequenceExample5 = require("../stu3-resources/Sequence-example-pgx-1.json");
		 expect(sequenceValidateFunction(sequenceExample5)).toBe(true);
	 });

	 test("validate Sequence-example-pgx-2.json", () => {
		 const sequenceExample6 = require("../stu3-resources/Sequence-example-pgx-2.json");
		 expect(sequenceValidateFunction(sequenceExample6)).toBe(true);
	 });

	 test("validate Sequence-example.json", () => {
		 const sequenceExample7 = require("../stu3-resources/Sequence-example.json");
		 expect(sequenceValidateFunction(sequenceExample7)).toBe(true);
	 });

	 test("validate Sequence-fda-example.json", () => {
		 const sequenceExample8 = require("../stu3-resources/Sequence-fda-example.json");
		 expect(sequenceValidateFunction(sequenceExample8)).toBe(true);
	 });

	 test("validate Sequence-fda-vcf-comparison.json", () => {
		 const sequenceExample9 = require("../stu3-resources/Sequence-fda-vcf-comparison.json");
		 expect(sequenceValidateFunction(sequenceExample9)).toBe(true);
	 });

	 test("validate Sequence-fda-vcfeval-comparison.json", () => {
		 const sequenceExample10 = require("../stu3-resources/Sequence-fda-vcfeval-comparison.json");
		 expect(sequenceValidateFunction(sequenceExample10)).toBe(true);
	 });

	 test("validate Sequence-graphic-example-1.json", () => {
		 const sequenceExample11 = require("../stu3-resources/Sequence-graphic-example-1.json");
		 expect(sequenceValidateFunction(sequenceExample11)).toBe(true);
	 });

	 test("validate Sequence-graphic-example-2.json", () => {
		 const sequenceExample12 = require("../stu3-resources/Sequence-graphic-example-2.json");
		 expect(sequenceValidateFunction(sequenceExample12)).toBe(true);
	 });

	 test("validate Sequence-graphic-example-3.json", () => {
		 const sequenceExample13 = require("../stu3-resources/Sequence-graphic-example-3.json");
		 expect(sequenceValidateFunction(sequenceExample13)).toBe(true);
	 });

	 test("validate Sequence-graphic-example-4.json", () => {
		 const sequenceExample14 = require("../stu3-resources/Sequence-graphic-example-4.json");
		 expect(sequenceValidateFunction(sequenceExample14)).toBe(true);
	 });

	 test("validate Sequence-graphic-example-5.json", () => {
		 const sequenceExample15 = require("../stu3-resources/Sequence-graphic-example-5.json");
		 expect(sequenceValidateFunction(sequenceExample15)).toBe(true);
	 });

	 test("validate Sequence-sequence-complex-variant.json", () => {
		 const sequenceExample16 = require("../stu3-resources/Sequence-sequence-complex-variant.json");
		 expect(sequenceValidateFunction(sequenceExample16)).toBe(true);
	 });

});