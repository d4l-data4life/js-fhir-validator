const encounterValidateFunction = require("../../stu3/js/Encounter");

describe("Encounter", () => {
	 test("validate Encounter-emerg.json", () => {
		 const encounterExample1 = require("../stu3-resources/Encounter-emerg.json");
		 expect(encounterValidateFunction(encounterExample1)).toBe(true);
	 });

	 test("validate Encounter-example.json", () => {
		 const encounterExample2 = require("../stu3-resources/Encounter-example.json");
		 expect(encounterValidateFunction(encounterExample2)).toBe(true);
	 });

	 test("validate Encounter-f001.json", () => {
		 const encounterExample3 = require("../stu3-resources/Encounter-f001.json");
		 expect(encounterValidateFunction(encounterExample3)).toBe(true);
	 });

	 test("validate Encounter-f002.json", () => {
		 const encounterExample4 = require("../stu3-resources/Encounter-f002.json");
		 expect(encounterValidateFunction(encounterExample4)).toBe(true);
	 });

	 test("validate Encounter-f003.json", () => {
		 const encounterExample5 = require("../stu3-resources/Encounter-f003.json");
		 expect(encounterValidateFunction(encounterExample5)).toBe(true);
	 });

	 test("validate Encounter-f201.json", () => {
		 const encounterExample6 = require("../stu3-resources/Encounter-f201.json");
		 expect(encounterValidateFunction(encounterExample6)).toBe(true);
	 });

	 test("validate Encounter-f202.json", () => {
		 const encounterExample7 = require("../stu3-resources/Encounter-f202.json");
		 expect(encounterValidateFunction(encounterExample7)).toBe(true);
	 });

	 test("validate Encounter-f203.json", () => {
		 const encounterExample8 = require("../stu3-resources/Encounter-f203.json");
		 expect(encounterValidateFunction(encounterExample8)).toBe(true);
	 });

	 test("validate Encounter-xcda.json", () => {
		 const encounterExample9 = require("../stu3-resources/Encounter-xcda.json");
		 expect(encounterValidateFunction(encounterExample9)).toBe(true);
	 });

});