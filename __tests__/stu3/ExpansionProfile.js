const expansionprofileValidateFunction = require("../../stu3/js/ExpansionProfile");

describe("ExpansionProfile", () => {
	 test("validate ExpansionProfile-example.json", () => {
		 const expansionprofileExample1 = require("../stu3-resources/ExpansionProfile-example.json");
		 expect(expansionprofileValidateFunction(expansionprofileExample1)).toBe(true);
	 });

});