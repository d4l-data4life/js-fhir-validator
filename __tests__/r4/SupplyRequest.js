const supplyrequestValidateFunction = require("../../r4/js/SupplyRequest");

describe("SupplyRequest", () => {
	 test("validate SupplyRequest-simpleorder.json", () => {
		 const supplyrequestExample1 = require("../r4-resources/SupplyRequest-simpleorder.json");
		 expect(supplyrequestValidateFunction(supplyrequestExample1)).toBe(true);
	 });

});