const linkageValidateFunction = require("../../stu3/js/Linkage");

describe("Linkage", () => {
	 test("validate Linkage-example.json", () => {
		 const linkageExample1 = require("../stu3-resources/Linkage-example.json");
		 expect(linkageValidateFunction(linkageExample1)).toBe(true);
	 });

});