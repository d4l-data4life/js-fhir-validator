const riskevidencesynthesisValidateFunction = require("../../r4/js/RiskEvidenceSynthesis");

describe("RiskEvidenceSynthesis", () => {
	 test("validate RiskEvidenceSynthesis-example.json", () => {
		 const riskevidencesynthesisExample1 = require("../r4-resources/RiskEvidenceSynthesis-example.json");
		 expect(riskevidencesynthesisValidateFunction(riskevidencesynthesisExample1)).toBe(true);
	 });

});