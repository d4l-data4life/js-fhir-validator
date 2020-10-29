const groupValidateFunction = require("../../r4/js/Group");

describe("Group", () => {
	 test("validate Group-101.json", () => {
		 const groupExample1 = require("../r4-resources/Group-101.json");
		 expect(groupValidateFunction(groupExample1)).toBe(true);
	 });

	 test("validate Group-102.json", () => {
		 const groupExample2 = require("../r4-resources/Group-102.json");
		 expect(groupValidateFunction(groupExample2)).toBe(true);
	 });

	 test("validate Group-example-patientlist.json", () => {
		 const groupExample3 = require("../r4-resources/Group-example-patientlist.json");
		 expect(groupValidateFunction(groupExample3)).toBe(true);
	 });

});