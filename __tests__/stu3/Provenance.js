const provenanceValidateFunction = require("../../stu3/js/Provenance");

describe("Provenance", () => {
	 test("validate Provenance-consent-signature.json", () => {
		 const provenanceExample1 = require("../stu3-resources/Provenance-consent-signature.json");
		 expect(provenanceValidateFunction(provenanceExample1)).toBe(true);
	 });

	 test("validate Provenance-example-biocompute-object.json", () => {
		 const provenanceExample2 = require("../stu3-resources/Provenance-example-biocompute-object.json");
		 expect(provenanceValidateFunction(provenanceExample2)).toBe(true);
	 });

	 test("validate Provenance-example-cwl.json", () => {
		 const provenanceExample3 = require("../stu3-resources/Provenance-example-cwl.json");
		 expect(provenanceValidateFunction(provenanceExample3)).toBe(true);
	 });

	 test("validate Provenance-example.json", () => {
		 const provenanceExample4 = require("../stu3-resources/Provenance-example.json");
		 expect(provenanceValidateFunction(provenanceExample4)).toBe(true);
	 });

	 test("validate Provenance-signature.json", () => {
		 const provenanceExample5 = require("../stu3-resources/Provenance-signature.json");
		 expect(provenanceValidateFunction(provenanceExample5)).toBe(true);
	 });

});