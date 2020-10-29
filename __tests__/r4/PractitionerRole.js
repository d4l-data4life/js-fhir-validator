const practitionerroleValidateFunction = require("../../r4/js/PractitionerRole");

describe("PractitionerRole", () => {
	 test("validate PractitionerRole-example.json", () => {
		 const practitionerroleExample1 = require("../r4-resources/PractitionerRole-example.json");
		 expect(practitionerroleValidateFunction(practitionerroleExample1)).toBe(true);
	 });

});