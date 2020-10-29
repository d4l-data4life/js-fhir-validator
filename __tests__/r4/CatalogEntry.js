const catalogentryValidateFunction = require("../../r4/js/CatalogEntry");

describe("CatalogEntry", () => {
	 test("validate CatalogEntry-example.json", () => {
		 const catalogentryExample1 = require("../r4-resources/CatalogEntry-example.json");
		 expect(catalogentryValidateFunction(catalogentryExample1)).toBe(true);
	 });

});