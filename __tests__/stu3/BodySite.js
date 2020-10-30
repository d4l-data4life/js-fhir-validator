const bodysiteValidateFunction = require("../../stu3/js/BodySite");

describe("BodySite", () => {
	 test("validate BodySite-fetus.json", () => {
		 const bodysiteExample1 = require("../stu3-resources/BodySite-fetus.json");
		 expect(bodysiteValidateFunction(bodysiteExample1)).toBe(true);
	 });

	 test("validate BodySite-skin-patch.json", () => {
		 const bodysiteExample2 = require("../stu3-resources/BodySite-skin-patch.json");
		 expect(bodysiteValidateFunction(bodysiteExample2)).toBe(true);
	 });

	 test("validate BodySite-tumor.json", () => {
		 const bodysiteExample3 = require("../stu3-resources/BodySite-tumor.json");
		 expect(bodysiteValidateFunction(bodysiteExample3)).toBe(true);
	 });

});