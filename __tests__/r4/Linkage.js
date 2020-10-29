const linkageValidateFunction = require("../../r4/js/Linkage");

describe("Linkage", () => {
	 test("validate Linkage-example.json", () => {
		 const linkageExample1 = require("../r4-resources/Linkage-example.json");
		 expect(linkageValidateFunction(linkageExample1)).toBe(true);
	 });

});