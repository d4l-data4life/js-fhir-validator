const molecularsequenceValidateFunction = require("../../r4/js/MolecularSequence");

describe("MolecularSequence", () => {
	 test("validate MolecularSequence-breastcancer.json", () => {
		 const molecularsequenceExample1 = require("../r4-resources/MolecularSequence-breastcancer.json");
		 expect(molecularsequenceValidateFunction(molecularsequenceExample1)).toBe(true);
	 });

	 test("validate MolecularSequence-coord-0-base.json", () => {
		 const molecularsequenceExample2 = require("../r4-resources/MolecularSequence-coord-0-base.json");
		 expect(molecularsequenceValidateFunction(molecularsequenceExample2)).toBe(true);
	 });

	 test("validate MolecularSequence-coord-1-base.json", () => {
		 const molecularsequenceExample3 = require("../r4-resources/MolecularSequence-coord-1-base.json");
		 expect(molecularsequenceValidateFunction(molecularsequenceExample3)).toBe(true);
	 });

	 test("validate MolecularSequence-example-TPMT-one.json", () => {
		 const molecularsequenceExample4 = require("../r4-resources/MolecularSequence-example-TPMT-one.json");
		 expect(molecularsequenceValidateFunction(molecularsequenceExample4)).toBe(true);
	 });

	 test("validate MolecularSequence-example-TPMT-two.json", () => {
		 const molecularsequenceExample5 = require("../r4-resources/MolecularSequence-example-TPMT-two.json");
		 expect(molecularsequenceValidateFunction(molecularsequenceExample5)).toBe(true);
	 });

	 test("validate MolecularSequence-example-pgx-1.json", () => {
		 const molecularsequenceExample6 = require("../r4-resources/MolecularSequence-example-pgx-1.json");
		 expect(molecularsequenceValidateFunction(molecularsequenceExample6)).toBe(true);
	 });

	 test("validate MolecularSequence-example-pgx-2.json", () => {
		 const molecularsequenceExample7 = require("../r4-resources/MolecularSequence-example-pgx-2.json");
		 expect(molecularsequenceValidateFunction(molecularsequenceExample7)).toBe(true);
	 });

	 test("validate MolecularSequence-example.json", () => {
		 const molecularsequenceExample8 = require("../r4-resources/MolecularSequence-example.json");
		 expect(molecularsequenceValidateFunction(molecularsequenceExample8)).toBe(true);
	 });

	 test("validate MolecularSequence-fda-example.json", () => {
		 const molecularsequenceExample9 = require("../r4-resources/MolecularSequence-fda-example.json");
		 expect(molecularsequenceValidateFunction(molecularsequenceExample9)).toBe(true);
	 });

	 test("validate MolecularSequence-fda-vcf-comparison.json", () => {
		 const molecularsequenceExample10 = require("../r4-resources/MolecularSequence-fda-vcf-comparison.json");
		 expect(molecularsequenceValidateFunction(molecularsequenceExample10)).toBe(true);
	 });

	 test("validate MolecularSequence-fda-vcfeval-comparison.json", () => {
		 const molecularsequenceExample11 = require("../r4-resources/MolecularSequence-fda-vcfeval-comparison.json");
		 expect(molecularsequenceValidateFunction(molecularsequenceExample11)).toBe(true);
	 });

	 test("validate MolecularSequence-graphic-example-1.json", () => {
		 const molecularsequenceExample12 = require("../r4-resources/MolecularSequence-graphic-example-1.json");
		 expect(molecularsequenceValidateFunction(molecularsequenceExample12)).toBe(true);
	 });

	 test("validate MolecularSequence-graphic-example-2.json", () => {
		 const molecularsequenceExample13 = require("../r4-resources/MolecularSequence-graphic-example-2.json");
		 expect(molecularsequenceValidateFunction(molecularsequenceExample13)).toBe(true);
	 });

	 test("validate MolecularSequence-graphic-example-3.json", () => {
		 const molecularsequenceExample14 = require("../r4-resources/MolecularSequence-graphic-example-3.json");
		 expect(molecularsequenceValidateFunction(molecularsequenceExample14)).toBe(true);
	 });

	 test("validate MolecularSequence-graphic-example-4.json", () => {
		 const molecularsequenceExample15 = require("../r4-resources/MolecularSequence-graphic-example-4.json");
		 expect(molecularsequenceValidateFunction(molecularsequenceExample15)).toBe(true);
	 });

	 test("validate MolecularSequence-graphic-example-5.json", () => {
		 const molecularsequenceExample16 = require("../r4-resources/MolecularSequence-graphic-example-5.json");
		 expect(molecularsequenceValidateFunction(molecularsequenceExample16)).toBe(true);
	 });

	 test("validate MolecularSequence-sequence-complex-variant.json", () => {
		 const molecularsequenceExample17 = require("../r4-resources/MolecularSequence-sequence-complex-variant.json");
		 expect(molecularsequenceValidateFunction(molecularsequenceExample17)).toBe(true);
	 });

});