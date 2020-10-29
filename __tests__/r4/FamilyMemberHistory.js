const familymemberhistoryValidateFunction = require("../../r4/js/FamilyMemberHistory");

describe("FamilyMemberHistory", () => {
	 test("validate FamilyMemberHistory-father.json", () => {
		 const familymemberhistoryExample1 = require("../r4-resources/FamilyMemberHistory-father.json");
		 expect(familymemberhistoryValidateFunction(familymemberhistoryExample1)).toBe(true);
	 });

	 test("validate FamilyMemberHistory-mother.json", () => {
		 const familymemberhistoryExample2 = require("../r4-resources/FamilyMemberHistory-mother.json");
		 expect(familymemberhistoryValidateFunction(familymemberhistoryExample2)).toBe(true);
	 });

});