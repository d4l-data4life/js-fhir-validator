const adverseeventValidateFunction = require("../../stu3/js/AdverseEvent");

describe("AdverseEvent", () => {
	 test("validate AdverseEvent-example.json", () => {
		 const adverseeventExample1 = require("../stu3-resources/AdverseEvent-example.json");
		 expect(adverseeventValidateFunction(adverseeventExample1)).toBe(true);
	 });

});