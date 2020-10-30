const claimValidateFunction = require("../../stu3/js/Claim");

describe("Claim", () => {
	 test("validate Claim-100150.json", () => {
		 const claimExample1 = require("../stu3-resources/Claim-100150.json");
		 expect(claimValidateFunction(claimExample1)).toBe(true);
	 });

	 test("validate Claim-100151.json", () => {
		 const claimExample2 = require("../stu3-resources/Claim-100151.json");
		 expect(claimValidateFunction(claimExample2)).toBe(true);
	 });

	 test("validate Claim-100153.json", () => {
		 const claimExample3 = require("../stu3-resources/Claim-100153.json");
		 expect(claimValidateFunction(claimExample3)).toBe(true);
	 });

	 test("validate Claim-100154.json", () => {
		 const claimExample4 = require("../stu3-resources/Claim-100154.json");
		 expect(claimValidateFunction(claimExample4)).toBe(true);
	 });

	 test("validate Claim-660150.json", () => {
		 const claimExample5 = require("../stu3-resources/Claim-660150.json");
		 expect(claimValidateFunction(claimExample5)).toBe(true);
	 });

	 test("validate Claim-660151.json", () => {
		 const claimExample6 = require("../stu3-resources/Claim-660151.json");
		 expect(claimValidateFunction(claimExample6)).toBe(true);
	 });

	 test("validate Claim-760150.json", () => {
		 const claimExample7 = require("../stu3-resources/Claim-760150.json");
		 expect(claimValidateFunction(claimExample7)).toBe(true);
	 });

	 test("validate Claim-760151.json", () => {
		 const claimExample8 = require("../stu3-resources/Claim-760151.json");
		 expect(claimValidateFunction(claimExample8)).toBe(true);
	 });

	 test("validate Claim-760152.json", () => {
		 const claimExample9 = require("../stu3-resources/Claim-760152.json");
		 expect(claimValidateFunction(claimExample9)).toBe(true);
	 });

	 test("validate Claim-860150.json", () => {
		 const claimExample10 = require("../stu3-resources/Claim-860150.json");
		 expect(claimValidateFunction(claimExample10)).toBe(true);
	 });

	 test("validate Claim-960150.json", () => {
		 const claimExample11 = require("../stu3-resources/Claim-960150.json");
		 expect(claimValidateFunction(claimExample11)).toBe(true);
	 });

	 test("validate Claim-960151.json", () => {
		 const claimExample12 = require("../stu3-resources/Claim-960151.json");
		 expect(claimValidateFunction(claimExample12)).toBe(true);
	 });

});