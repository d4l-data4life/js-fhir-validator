const practitionerroleValidateFunction = require("../../stu3/js/PractitionerRole");

describe("PractitionerRole", () => {
	 test("validate PractitionerRole-example.json", () => {
		 const practitionerroleExample1 = require("../stu3-resources/PractitionerRole-example.json");
		 expect(practitionerroleValidateFunction(practitionerroleExample1)).toBe(true);
	 });

});