const observationValidateFunction = require("../../stu3/js/Observation");

describe("Observation", () => {
	 test("validate Observation-blood-pressure-cancel.json", () => {
		 const observationExample1 = require("../stu3-resources/Observation-blood-pressure-cancel.json");
		 expect(observationValidateFunction(observationExample1)).toBe(true);
	 });

	 test("validate Observation-blood-pressure-dar.json", () => {
		 const observationExample2 = require("../stu3-resources/Observation-blood-pressure-dar.json");
		 expect(observationValidateFunction(observationExample2)).toBe(true);
	 });

	 test("validate Observation-blood-pressure.json", () => {
		 const observationExample3 = require("../stu3-resources/Observation-blood-pressure.json");
		 expect(observationValidateFunction(observationExample3)).toBe(true);
	 });

	 test("validate Observation-bmd.json", () => {
		 const observationExample4 = require("../stu3-resources/Observation-bmd.json");
		 expect(observationValidateFunction(observationExample4)).toBe(true);
	 });

	 test("validate Observation-bmi.json", () => {
		 const observationExample5 = require("../stu3-resources/Observation-bmi.json");
		 expect(observationValidateFunction(observationExample5)).toBe(true);
	 });

	 test("validate Observation-body-height.json", () => {
		 const observationExample6 = require("../stu3-resources/Observation-body-height.json");
		 expect(observationValidateFunction(observationExample6)).toBe(true);
	 });

	 test("validate Observation-body-length.json", () => {
		 const observationExample7 = require("../stu3-resources/Observation-body-length.json");
		 expect(observationValidateFunction(observationExample7)).toBe(true);
	 });

	 test("validate Observation-body-temperature.json", () => {
		 const observationExample8 = require("../stu3-resources/Observation-body-temperature.json");
		 expect(observationValidateFunction(observationExample8)).toBe(true);
	 });

	 test("validate Observation-date-lastmp.json", () => {
		 const observationExample9 = require("../stu3-resources/Observation-date-lastmp.json");
		 expect(observationValidateFunction(observationExample9)).toBe(true);
	 });

	 test("validate Observation-ekg.json", () => {
		 const observationExample10 = require("../stu3-resources/Observation-ekg.json");
		 expect(observationValidateFunction(observationExample10)).toBe(true);
	 });

	 test("validate Observation-example-genetics-2.json", () => {
		 const observationExample11 = require("../stu3-resources/Observation-example-genetics-2.json");
		 expect(observationValidateFunction(observationExample11)).toBe(true);
	 });

	 test("validate Observation-example-genetics-3.json", () => {
		 const observationExample12 = require("../stu3-resources/Observation-example-genetics-3.json");
		 expect(observationValidateFunction(observationExample12)).toBe(true);
	 });

	 test("validate Observation-example-genetics-4.json", () => {
		 const observationExample13 = require("../stu3-resources/Observation-example-genetics-4.json");
		 expect(observationValidateFunction(observationExample13)).toBe(true);
	 });

	 test("validate Observation-example-genetics-5.json", () => {
		 const observationExample14 = require("../stu3-resources/Observation-example-genetics-5.json");
		 expect(observationValidateFunction(observationExample14)).toBe(true);
	 });

	 test("validate Observation-example.json", () => {
		 const observationExample15 = require("../stu3-resources/Observation-example.json");
		 expect(observationValidateFunction(observationExample15)).toBe(true);
	 });

	 test("validate Observation-eye-color.json", () => {
		 const observationExample16 = require("../stu3-resources/Observation-eye-color.json");
		 expect(observationValidateFunction(observationExample16)).toBe(true);
	 });

	 test("validate Observation-f001.json", () => {
		 const observationExample17 = require("../stu3-resources/Observation-f001.json");
		 expect(observationValidateFunction(observationExample17)).toBe(true);
	 });

	 test("validate Observation-f002.json", () => {
		 const observationExample18 = require("../stu3-resources/Observation-f002.json");
		 expect(observationValidateFunction(observationExample18)).toBe(true);
	 });

	 test("validate Observation-f003.json", () => {
		 const observationExample19 = require("../stu3-resources/Observation-f003.json");
		 expect(observationValidateFunction(observationExample19)).toBe(true);
	 });

	 test("validate Observation-f004.json", () => {
		 const observationExample20 = require("../stu3-resources/Observation-f004.json");
		 expect(observationValidateFunction(observationExample20)).toBe(true);
	 });

	 test("validate Observation-f005.json", () => {
		 const observationExample21 = require("../stu3-resources/Observation-f005.json");
		 expect(observationValidateFunction(observationExample21)).toBe(true);
	 });

	 test("validate Observation-f202.json", () => {
		 const observationExample22 = require("../stu3-resources/Observation-f202.json");
		 expect(observationValidateFunction(observationExample22)).toBe(true);
	 });

	 test("validate Observation-f203.json", () => {
		 const observationExample23 = require("../stu3-resources/Observation-f203.json");
		 expect(observationValidateFunction(observationExample23)).toBe(true);
	 });

	 test("validate Observation-f204.json", () => {
		 const observationExample24 = require("../stu3-resources/Observation-f204.json");
		 expect(observationValidateFunction(observationExample24)).toBe(true);
	 });

	 test("validate Observation-f205.json", () => {
		 const observationExample25 = require("../stu3-resources/Observation-f205.json");
		 expect(observationValidateFunction(observationExample25)).toBe(true);
	 });

	 test("validate Observation-f206.json", () => {
		 const observationExample26 = require("../stu3-resources/Observation-f206.json");
		 expect(observationValidateFunction(observationExample26)).toBe(true);
	 });

	 test("validate Observation-gcs-qa.json", () => {
		 const observationExample27 = require("../stu3-resources/Observation-gcs-qa.json");
		 expect(observationValidateFunction(observationExample27)).toBe(true);
	 });

	 test("validate Observation-head-circumference.json", () => {
		 const observationExample28 = require("../stu3-resources/Observation-head-circumference.json");
		 expect(observationValidateFunction(observationExample28)).toBe(true);
	 });

	 test("validate Observation-heart-rate.json", () => {
		 const observationExample29 = require("../stu3-resources/Observation-heart-rate.json");
		 expect(observationValidateFunction(observationExample29)).toBe(true);
	 });

	 test("validate Observation-mbp.json", () => {
		 const observationExample30 = require("../stu3-resources/Observation-mbp.json");
		 expect(observationValidateFunction(observationExample30)).toBe(true);
	 });

	 test("validate Observation-respiratory-rate.json", () => {
		 const observationExample31 = require("../stu3-resources/Observation-respiratory-rate.json");
		 expect(observationValidateFunction(observationExample31)).toBe(true);
	 });

	 test("validate Observation-satO2.json", () => {
		 const observationExample32 = require("../stu3-resources/Observation-satO2.json");
		 expect(observationValidateFunction(observationExample32)).toBe(true);
	 });

	 test("validate Observation-unsat.json", () => {
		 const observationExample33 = require("../stu3-resources/Observation-unsat.json");
		 expect(observationValidateFunction(observationExample33)).toBe(true);
	 });

	 test("validate Observation-vitals-panel.json", () => {
		 const observationExample34 = require("../stu3-resources/Observation-vitals-panel.json");
		 expect(observationValidateFunction(observationExample34)).toBe(true);
	 });

});