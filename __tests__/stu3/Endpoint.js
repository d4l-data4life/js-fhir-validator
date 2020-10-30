const endpointValidateFunction = require("../../stu3/js/Endpoint");

describe("Endpoint", () => {
	 test("validate Endpoint-example-iid.json", () => {
		 const endpointExample1 = require("../stu3-resources/Endpoint-example-iid.json");
		 expect(endpointValidateFunction(endpointExample1)).toBe(true);
	 });

	 test("validate Endpoint-example-wadors.json", () => {
		 const endpointExample2 = require("../stu3-resources/Endpoint-example-wadors.json");
		 expect(endpointValidateFunction(endpointExample2)).toBe(true);
	 });

	 test("validate Endpoint-example.json", () => {
		 const endpointExample3 = require("../stu3-resources/Endpoint-example.json");
		 expect(endpointValidateFunction(endpointExample3)).toBe(true);
	 });

});