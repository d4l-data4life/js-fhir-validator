const subscriptionValidateFunction = require("../../stu3/js/Subscription");

describe("Subscription", () => {
	 test("validate Subscription-example-error.json", () => {
		 const subscriptionExample1 = require("../stu3-resources/Subscription-example-error.json");
		 expect(subscriptionValidateFunction(subscriptionExample1)).toBe(true);
	 });

	 test("validate Subscription-example.json", () => {
		 const subscriptionExample2 = require("../stu3-resources/Subscription-example.json");
		 expect(subscriptionValidateFunction(subscriptionExample2)).toBe(true);
	 });

});