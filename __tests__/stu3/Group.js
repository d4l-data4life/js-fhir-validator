const groupValidateFunction = require("../../stu3/js/Group");

describe("Group", () => {
	 test("validate Group-101.json", () => {
		 const groupExample1 = require("../stu3-resources/Group-101.json");
		 expect(groupValidateFunction(groupExample1)).toBe(true);
	 });

	 test("validate Group-102.json", () => {
		 const groupExample2 = require("../stu3-resources/Group-102.json");
		 expect(groupValidateFunction(groupExample2)).toBe(true);
	 });

});