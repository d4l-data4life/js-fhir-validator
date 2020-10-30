const imagingmanifestValidateFunction = require("../../stu3/js/ImagingManifest");

describe("ImagingManifest", () => {
	 test("validate ImagingManifest-example.json", () => {
		 const imagingmanifestExample1 = require("../stu3-resources/ImagingManifest-example.json");
		 expect(imagingmanifestValidateFunction(imagingmanifestExample1)).toBe(true);
	 });

});