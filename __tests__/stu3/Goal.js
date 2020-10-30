const goalValidateFunction = require("../../stu3/js/Goal");

describe("Goal", () => {
	 test("validate Goal-example.json", () => {
		 const goalExample1 = require("../stu3-resources/Goal-example.json");
		 expect(goalValidateFunction(goalExample1)).toBe(true);
	 });

	 test("validate Goal-stop-smoking.json", () => {
		 const goalExample2 = require("../stu3-resources/Goal-stop-smoking.json");
		 expect(goalValidateFunction(goalExample2)).toBe(true);
	 });

});