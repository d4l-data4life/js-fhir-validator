const mediaValidateFunction = require("../../r4/js/Media");

describe("Media", () => {
	 test("validate Media-example.json", () => {
		 const mediaExample1 = require("../r4-resources/Media-example.json");
		 expect(mediaValidateFunction(mediaExample1)).toBe(true);
	 });

	 test("validate Media-sound.json", () => {
		 const mediaExample2 = require("../r4-resources/Media-sound.json");
		 expect(mediaValidateFunction(mediaExample2)).toBe(true);
	 });

	 test("validate Media-xray.json", () => {
		 const mediaExample3 = require("../r4-resources/Media-xray.json");
		 expect(mediaValidateFunction(mediaExample3)).toBe(true);
	 });

});