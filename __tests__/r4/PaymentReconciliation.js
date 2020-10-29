const paymentreconciliationValidateFunction = require("../../r4/js/PaymentReconciliation");

describe("PaymentReconciliation", () => {
	 test("validate PaymentReconciliation-ER2500.json", () => {
		 const paymentreconciliationExample1 = require("../r4-resources/PaymentReconciliation-ER2500.json");
		 expect(paymentreconciliationValidateFunction(paymentreconciliationExample1)).toBe(true);
	 });

});