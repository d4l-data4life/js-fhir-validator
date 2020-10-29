const bundleValidateFunction = require("../../r4/js/Bundle");

describe("Bundle", () => {
	 test("validate Bundle-bundle-request-medsallergies.json", () => {
		 const bundleExample1 = require("../r4-resources/Bundle-bundle-request-medsallergies.json");
		 expect(bundleValidateFunction(bundleExample1)).toBe(true);
	 });

	 test("validate Bundle-bundle-request-simplesummary.json", () => {
		 const bundleExample2 = require("../r4-resources/Bundle-bundle-request-simplesummary.json");
		 expect(bundleValidateFunction(bundleExample2)).toBe(true);
	 });

});