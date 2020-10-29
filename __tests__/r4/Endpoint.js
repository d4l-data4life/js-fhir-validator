const endpointValidateFunction = require("../../r4/js/Endpoint");

describe("Endpoint", () => {
	 test("validate Endpoint-direct-endpoint.json", () => {
		 const endpointExample1 = require("../r4-resources/Endpoint-direct-endpoint.json");
		 expect(endpointValidateFunction(endpointExample1)).toBe(true);
	 });

	 test("validate Endpoint-example-iid.json", () => {
		 const endpointExample2 = require("../r4-resources/Endpoint-example-iid.json");
		 expect(endpointValidateFunction(endpointExample2)).toBe(true);
	 });

	 test("validate Endpoint-example-wadors.json", () => {
		 const endpointExample3 = require("../r4-resources/Endpoint-example-wadors.json");
		 expect(endpointValidateFunction(endpointExample3)).toBe(true);
	 });

	 test("validate Endpoint-example.json", () => {
		 const endpointExample4 = require("../r4-resources/Endpoint-example.json");
		 expect(endpointValidateFunction(endpointExample4)).toBe(true);
	 });

});