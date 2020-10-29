const evidenceValidateFunction = require("../../r4/js/Evidence");

describe("Evidence", () => {
	 test("validate Evidence-example.json", () => {
		 const evidenceExample1 = require("../r4-resources/Evidence-example.json");
		 expect(evidenceValidateFunction(evidenceExample1)).toBe(true);
	 });

});