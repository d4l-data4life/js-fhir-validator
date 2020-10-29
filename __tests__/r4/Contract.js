const contractValidateFunction = require("../../r4/js/Contract");

describe("Contract", () => {
	 test("validate Contract-C-123.json", () => {
		 const contractExample1 = require("../r4-resources/Contract-C-123.json");
		 expect(contractValidateFunction(contractExample1)).toBe(true);
	 });

	 test("validate Contract-C-2121.json", () => {
		 const contractExample2 = require("../r4-resources/Contract-C-2121.json");
		 expect(contractValidateFunction(contractExample2)).toBe(true);
	 });

	 test("validate Contract-INS-101.json", () => {
		 const contractExample3 = require("../r4-resources/Contract-INS-101.json");
		 expect(contractValidateFunction(contractExample3)).toBe(true);
	 });

	 test("validate Contract-pcd-example-notAuthor.json", () => {
		 const contractExample4 = require("../r4-resources/Contract-pcd-example-notAuthor.json");
		 expect(contractValidateFunction(contractExample4)).toBe(true);
	 });

	 test("validate Contract-pcd-example-notLabs.json", () => {
		 const contractExample5 = require("../r4-resources/Contract-pcd-example-notLabs.json");
		 expect(contractValidateFunction(contractExample5)).toBe(true);
	 });

	 test("validate Contract-pcd-example-notOrg.json", () => {
		 const contractExample6 = require("../r4-resources/Contract-pcd-example-notOrg.json");
		 expect(contractValidateFunction(contractExample6)).toBe(true);
	 });

	 test("validate Contract-pcd-example-notThem.json", () => {
		 const contractExample7 = require("../r4-resources/Contract-pcd-example-notThem.json");
		 expect(contractValidateFunction(contractExample7)).toBe(true);
	 });

	 test("validate Contract-pcd-example-notThis.json", () => {
		 const contractExample8 = require("../r4-resources/Contract-pcd-example-notThis.json");
		 expect(contractValidateFunction(contractExample8)).toBe(true);
	 });

});