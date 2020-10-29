const organizationaffiliationValidateFunction = require("../../r4/js/OrganizationAffiliation");

describe("OrganizationAffiliation", () => {
	 test("validate OrganizationAffiliation-example.json", () => {
		 const organizationaffiliationExample1 = require("../r4-resources/OrganizationAffiliation-example.json");
		 expect(organizationaffiliationValidateFunction(organizationaffiliationExample1)).toBe(true);
	 });

	 test("validate OrganizationAffiliation-orgrole1.json", () => {
		 const organizationaffiliationExample2 = require("../r4-resources/OrganizationAffiliation-orgrole1.json");
		 expect(organizationaffiliationValidateFunction(organizationaffiliationExample2)).toBe(true);
	 });

	 test("validate OrganizationAffiliation-orgrole2.json", () => {
		 const organizationaffiliationExample3 = require("../r4-resources/OrganizationAffiliation-orgrole2.json");
		 expect(organizationaffiliationValidateFunction(organizationaffiliationExample3)).toBe(true);
	 });

});