const namingsystemValidateFunction = require("../../stu3/js/NamingSystem");

describe("NamingSystem", () => {
	 test("validate NamingSystem-example-id.json", () => {
		 const namingsystemExample1 = require("../stu3-resources/NamingSystem-example-id.json");
		 expect(namingsystemValidateFunction(namingsystemExample1)).toBe(true);
	 });

	 test("validate NamingSystem-example-replaced.json", () => {
		 const namingsystemExample2 = require("../stu3-resources/NamingSystem-example-replaced.json");
		 expect(namingsystemValidateFunction(namingsystemExample2)).toBe(true);
	 });

	 test("validate NamingSystem-example.json", () => {
		 const namingsystemExample3 = require("../stu3-resources/NamingSystem-example.json");
		 expect(namingsystemValidateFunction(namingsystemExample3)).toBe(true);
	 });

});