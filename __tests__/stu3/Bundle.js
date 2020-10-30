const bundleValidateFunction = require("../../stu3/js/Bundle");

describe("Bundle", () => {
	 test("validate Bundle-bundle-request-medsallergies.json", () => {
		 const bundleExample1 = require("../stu3-resources/Bundle-bundle-request-medsallergies.json");
		 expect(bundleValidateFunction(bundleExample1)).toBe(true);
	 });

	 test("validate Bundle-bundle-request-simplesummary.json", () => {
		 const bundleExample2 = require("../stu3-resources/Bundle-bundle-request-simplesummary.json");
		 expect(bundleValidateFunction(bundleExample2)).toBe(true);
	 });

	 test("validate Bundle-bundle-response-medsallergies.json", () => {
		 const bundleExample3 = require("../stu3-resources/Bundle-bundle-response-medsallergies.json");
		 expect(bundleValidateFunction(bundleExample3)).toBe(true);
	 });

	 test("validate Bundle-bundle-response-simplesummary.json", () => {
		 const bundleExample4 = require("../stu3-resources/Bundle-bundle-response-simplesummary.json");
		 expect(bundleValidateFunction(bundleExample4)).toBe(true);
	 });

});