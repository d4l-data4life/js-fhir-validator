const appointmentValidateFunction = require("../../stu3/js/Appointment");

describe("Appointment", () => {
	 test("validate Appointment-2docs.json", () => {
		 const appointmentExample1 = require("../stu3-resources/Appointment-2docs.json");
		 expect(appointmentValidateFunction(appointmentExample1)).toBe(true);
	 });

	 test("validate Appointment-example.json", () => {
		 const appointmentExample2 = require("../stu3-resources/Appointment-example.json");
		 expect(appointmentValidateFunction(appointmentExample2)).toBe(true);
	 });

	 test("validate Appointment-examplereq.json", () => {
		 const appointmentExample3 = require("../stu3-resources/Appointment-examplereq.json");
		 expect(appointmentValidateFunction(appointmentExample3)).toBe(true);
	 });

});