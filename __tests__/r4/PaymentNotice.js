const paymentnoticeValidateFunction = require("../../r4/js/PaymentNotice");

describe("PaymentNotice", () => {
	 test("validate PaymentNotice-77654.json", () => {
		 const paymentnoticeExample1 = require("../r4-resources/PaymentNotice-77654.json");
		 expect(paymentnoticeValidateFunction(paymentnoticeExample1)).toBe(true);
	 });

});