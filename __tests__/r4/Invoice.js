const invoiceValidateFunction = require("../../r4/js/Invoice");

describe("Invoice", () => {
	 test("validate Invoice-example.json", () => {
		 const invoiceExample1 = require("../r4-resources/Invoice-example.json");
		 expect(invoiceValidateFunction(invoiceExample1)).toBe(true);
	 });

});