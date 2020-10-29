const evidencevariableValidateFunction = require("../../r4/js/EvidenceVariable");

describe("EvidenceVariable", () => {
	 test("validate EvidenceVariable-example.json", () => {
		 const evidencevariableExample1 = require("../r4-resources/EvidenceVariable-example.json");
		 expect(evidencevariableValidateFunction(evidencevariableExample1)).toBe(true);
	 });

});