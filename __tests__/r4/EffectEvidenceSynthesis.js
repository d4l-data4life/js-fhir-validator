const effectevidencesynthesisValidateFunction = require("../../r4/js/EffectEvidenceSynthesis");

describe("EffectEvidenceSynthesis", () => {
	 test("validate EffectEvidenceSynthesis-example.json", () => {
		 const effectevidencesynthesisExample1 = require("../r4-resources/EffectEvidenceSynthesis-example.json");
		 expect(effectevidencesynthesisValidateFunction(effectevidencesynthesisExample1)).toBe(true);
	 });

});