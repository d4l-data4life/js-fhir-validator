const communicationrequestValidateFunction = require("../../stu3/js/CommunicationRequest");

describe("CommunicationRequest", () => {
	 test("validate CommunicationRequest-example.json", () => {
		 const communicationrequestExample1 = require("../stu3-resources/CommunicationRequest-example.json");
		 expect(communicationrequestValidateFunction(communicationrequestExample1)).toBe(true);
	 });

});