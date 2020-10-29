const adverseeventValidateFunction = require("../../r4/js/AdverseEvent");

describe("AdverseEvent", () => {
	 test("validate AdverseEvent-example.json", () => {
		 const adverseeventExample1 = require("../r4-resources/AdverseEvent-example.json");
		 expect(adverseeventValidateFunction(adverseeventExample1)).toBe(true);
	 });

});