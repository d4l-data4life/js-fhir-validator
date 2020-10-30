const supplyrequestValidateFunction = require("../../stu3/js/SupplyRequest");

describe("SupplyRequest", () => {
	 test("validate SupplyRequest-simpleorder.json", () => {
		 const supplyrequestExample1 = require("../stu3-resources/SupplyRequest-simpleorder.json");
		 expect(supplyrequestValidateFunction(supplyrequestExample1)).toBe(true);
	 });

});