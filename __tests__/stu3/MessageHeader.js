const messageheaderValidateFunction = require("../../stu3/js/MessageHeader");

describe("MessageHeader", () => {
	 test("validate MessageHeader-1cbdfb97-5859-48a4-8301-d54eab818d68.json", () => {
		 const messageheaderExample1 = require("../stu3-resources/MessageHeader-1cbdfb97-5859-48a4-8301-d54eab818d68.json");
		 expect(messageheaderValidateFunction(messageheaderExample1)).toBe(true);
	 });

});