const communicationrequestValidateFunction = require("../../r4/js/CommunicationRequest");

describe("CommunicationRequest", () => {
	 test("validate CommunicationRequest-example.json", () => {
		 const communicationrequestExample1 = require("../r4-resources/CommunicationRequest-example.json");
		 expect(communicationrequestValidateFunction(communicationrequestExample1)).toBe(true);
	 });

});