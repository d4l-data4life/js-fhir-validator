const terminologycapabilitiesValidateFunction = require("../../r4/js/TerminologyCapabilities");

describe("TerminologyCapabilities", () => {
	 test("validate TerminologyCapabilities-example.json", () => {
		 const terminologycapabilitiesExample1 = require("../r4-resources/TerminologyCapabilities-example.json");
		 expect(terminologycapabilitiesValidateFunction(terminologycapabilitiesExample1)).toBe(true);
	 });

});