const familymemberhistoryValidateFunction = require("../../stu3/js/FamilyMemberHistory");

describe("FamilyMemberHistory", () => {
	 test("validate FamilyMemberHistory-father.json", () => {
		 const familymemberhistoryExample1 = require("../stu3-resources/FamilyMemberHistory-father.json");
		 expect(familymemberhistoryValidateFunction(familymemberhistoryExample1)).toBe(true);
	 });

	 test("validate FamilyMemberHistory-mother.json", () => {
		 const familymemberhistoryExample2 = require("../stu3-resources/FamilyMemberHistory-mother.json");
		 expect(familymemberhistoryValidateFunction(familymemberhistoryExample2)).toBe(true);
	 });

});