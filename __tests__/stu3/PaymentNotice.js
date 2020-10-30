const paymentnoticeValidateFunction = require("../../stu3/js/PaymentNotice");

describe("PaymentNotice", () => {
	 test("validate PaymentNotice-77654.json", () => {
		 const paymentnoticeExample1 = require("../stu3-resources/PaymentNotice-77654.json");
		 expect(paymentnoticeValidateFunction(paymentnoticeExample1)).toBe(true);
	 });

});