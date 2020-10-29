const namingsystemValidateFunction = require("../../r4/js/NamingSystem");

describe("NamingSystem", () => {
	 test("validate NamingSystem-example-id.json", () => {
		 const namingsystemExample1 = require("../r4-resources/NamingSystem-example-id.json");
		 expect(namingsystemValidateFunction(namingsystemExample1)).toBe(true);
	 });

	 test("validate NamingSystem-example.json", () => {
		 const namingsystemExample2 = require("../r4-resources/NamingSystem-example.json");
		 expect(namingsystemValidateFunction(namingsystemExample2)).toBe(true);
	 });

});