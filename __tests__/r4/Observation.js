const observationValidateFunction = require("../../r4/js/Observation");

describe("Observation", () => {
	 test("validate Observation-656.json", () => {
		 const observationExample1 = require("../r4-resources/Observation-656.json");
		 expect(observationValidateFunction(observationExample1)).toBe(true);
	 });

	 test("validate Observation-abdo-tender.json", () => {
		 const observationExample2 = require("../r4-resources/Observation-abdo-tender.json");
		 expect(observationValidateFunction(observationExample2)).toBe(true);
	 });

	 test("validate Observation-alcohol-type.json", () => {
		 const observationExample3 = require("../r4-resources/Observation-alcohol-type.json");
		 expect(observationValidateFunction(observationExample3)).toBe(true);
	 });

	 test("validate Observation-bgpanel.json", () => {
		 const observationExample4 = require("../r4-resources/Observation-bgpanel.json");
		 expect(observationValidateFunction(observationExample4)).toBe(true);
	 });

	 test("validate Observation-blood-pressure-cancel.json", () => {
		 const observationExample5 = require("../r4-resources/Observation-blood-pressure-cancel.json");
		 expect(observationValidateFunction(observationExample5)).toBe(true);
	 });

	 test("validate Observation-blood-pressure-dar.json", () => {
		 const observationExample6 = require("../r4-resources/Observation-blood-pressure-dar.json");
		 expect(observationValidateFunction(observationExample6)).toBe(true);
	 });

	 test("validate Observation-blood-pressure.json", () => {
		 const observationExample7 = require("../r4-resources/Observation-blood-pressure.json");
		 expect(observationValidateFunction(observationExample7)).toBe(true);
	 });

	 test("validate Observation-bloodgroup.json", () => {
		 const observationExample8 = require("../r4-resources/Observation-bloodgroup.json");
		 expect(observationValidateFunction(observationExample8)).toBe(true);
	 });

	 test("validate Observation-bmd.json", () => {
		 const observationExample9 = require("../r4-resources/Observation-bmd.json");
		 expect(observationValidateFunction(observationExample9)).toBe(true);
	 });

	 test("validate Observation-bmi-using-related.json", () => {
		 const observationExample10 = require("../r4-resources/Observation-bmi-using-related.json");
		 expect(observationValidateFunction(observationExample10)).toBe(true);
	 });

	 test("validate Observation-bmi.json", () => {
		 const observationExample11 = require("../r4-resources/Observation-bmi.json");
		 expect(observationValidateFunction(observationExample11)).toBe(true);
	 });

	 test("validate Observation-body-height.json", () => {
		 const observationExample12 = require("../r4-resources/Observation-body-height.json");
		 expect(observationValidateFunction(observationExample12)).toBe(true);
	 });

	 test("validate Observation-body-length.json", () => {
		 const observationExample13 = require("../r4-resources/Observation-body-length.json");
		 expect(observationValidateFunction(observationExample13)).toBe(true);
	 });

	 test("validate Observation-body-temperature.json", () => {
		 const observationExample14 = require("../r4-resources/Observation-body-temperature.json");
		 expect(observationValidateFunction(observationExample14)).toBe(true);
	 });

	 test("validate Observation-clinical-gender.json", () => {
		 const observationExample15 = require("../r4-resources/Observation-clinical-gender.json");
		 expect(observationValidateFunction(observationExample15)).toBe(true);
	 });

	 test("validate Observation-date-lastmp.json", () => {
		 const observationExample16 = require("../r4-resources/Observation-date-lastmp.json");
		 expect(observationValidateFunction(observationExample16)).toBe(true);
	 });

	 test("validate Observation-decimal.json", () => {
		 const observationExample17 = require("../r4-resources/Observation-decimal.json");
		 expect(observationValidateFunction(observationExample17)).toBe(true);
	 });

	 test("validate Observation-ekg.json", () => {
		 const observationExample18 = require("../r4-resources/Observation-ekg.json");
		 expect(observationValidateFunction(observationExample18)).toBe(true);
	 });

	 test("validate Observation-example-genetics-2.json", () => {
		 const observationExample19 = require("../r4-resources/Observation-example-genetics-2.json");
		 expect(observationValidateFunction(observationExample19)).toBe(true);
	 });

	 test("validate Observation-example-genetics-3.json", () => {
		 const observationExample20 = require("../r4-resources/Observation-example-genetics-3.json");
		 expect(observationValidateFunction(observationExample20)).toBe(true);
	 });

	 test("validate Observation-example-genetics-4.json", () => {
		 const observationExample21 = require("../r4-resources/Observation-example-genetics-4.json");
		 expect(observationValidateFunction(observationExample21)).toBe(true);
	 });

	 test("validate Observation-example.json", () => {
		 const observationExample22 = require("../r4-resources/Observation-example.json");
		 expect(observationValidateFunction(observationExample22)).toBe(true);
	 });

	 test("validate Observation-eye-color.json", () => {
		 const observationExample23 = require("../r4-resources/Observation-eye-color.json");
		 expect(observationValidateFunction(observationExample23)).toBe(true);
	 });

	 test("validate Observation-f001.json", () => {
		 const observationExample24 = require("../r4-resources/Observation-f001.json");
		 expect(observationValidateFunction(observationExample24)).toBe(true);
	 });

	 test("validate Observation-f002.json", () => {
		 const observationExample25 = require("../r4-resources/Observation-f002.json");
		 expect(observationValidateFunction(observationExample25)).toBe(true);
	 });

	 test("validate Observation-f003.json", () => {
		 const observationExample26 = require("../r4-resources/Observation-f003.json");
		 expect(observationValidateFunction(observationExample26)).toBe(true);
	 });

	 test("validate Observation-f004.json", () => {
		 const observationExample27 = require("../r4-resources/Observation-f004.json");
		 expect(observationValidateFunction(observationExample27)).toBe(true);
	 });

	 test("validate Observation-f005.json", () => {
		 const observationExample28 = require("../r4-resources/Observation-f005.json");
		 expect(observationValidateFunction(observationExample28)).toBe(true);
	 });

	 test("validate Observation-f202.json", () => {
		 const observationExample29 = require("../r4-resources/Observation-f202.json");
		 expect(observationValidateFunction(observationExample29)).toBe(true);
	 });

	 test("validate Observation-f203.json", () => {
		 const observationExample30 = require("../r4-resources/Observation-f203.json");
		 expect(observationValidateFunction(observationExample30)).toBe(true);
	 });

	 test("validate Observation-f204.json", () => {
		 const observationExample31 = require("../r4-resources/Observation-f204.json");
		 expect(observationValidateFunction(observationExample31)).toBe(true);
	 });

	 test("validate Observation-f205.json", () => {
		 const observationExample32 = require("../r4-resources/Observation-f205.json");
		 expect(observationValidateFunction(observationExample32)).toBe(true);
	 });

	 test("validate Observation-f206.json", () => {
		 const observationExample33 = require("../r4-resources/Observation-f206.json");
		 expect(observationValidateFunction(observationExample33)).toBe(true);
	 });

	 test("validate Observation-gcs-qa.json", () => {
		 const observationExample34 = require("../r4-resources/Observation-gcs-qa.json");
		 expect(observationValidateFunction(observationExample34)).toBe(true);
	 });

	 test("validate Observation-glasgow.json", () => {
		 const observationExample35 = require("../r4-resources/Observation-glasgow.json");
		 expect(observationValidateFunction(observationExample35)).toBe(true);
	 });

	 test("validate Observation-head-circumference.json", () => {
		 const observationExample36 = require("../r4-resources/Observation-head-circumference.json");
		 expect(observationValidateFunction(observationExample36)).toBe(true);
	 });

	 test("validate Observation-heart-rate.json", () => {
		 const observationExample37 = require("../r4-resources/Observation-heart-rate.json");
		 expect(observationValidateFunction(observationExample37)).toBe(true);
	 });

	 test("validate Observation-herd1.json", () => {
		 const observationExample38 = require("../r4-resources/Observation-herd1.json");
		 expect(observationValidateFunction(observationExample38)).toBe(true);
	 });

	 test("validate Observation-mbp.json", () => {
		 const observationExample39 = require("../r4-resources/Observation-mbp.json");
		 expect(observationValidateFunction(observationExample39)).toBe(true);
	 });

	 test("validate Observation-respiratory-rate.json", () => {
		 const observationExample40 = require("../r4-resources/Observation-respiratory-rate.json");
		 expect(observationValidateFunction(observationExample40)).toBe(true);
	 });

	 test("validate Observation-rhstatus.json", () => {
		 const observationExample41 = require("../r4-resources/Observation-rhstatus.json");
		 expect(observationValidateFunction(observationExample41)).toBe(true);
	 });

	 test("validate Observation-satO2.json", () => {
		 const observationExample42 = require("../r4-resources/Observation-satO2.json");
		 expect(observationValidateFunction(observationExample42)).toBe(true);
	 });

	 test("validate Observation-secondsmoke.json", () => {
		 const observationExample43 = require("../r4-resources/Observation-secondsmoke.json");
		 expect(observationValidateFunction(observationExample43)).toBe(true);
	 });

	 test("validate Observation-trachcare.json", () => {
		 const observationExample44 = require("../r4-resources/Observation-trachcare.json");
		 expect(observationValidateFunction(observationExample44)).toBe(true);
	 });

	 test("validate Observation-unsat.json", () => {
		 const observationExample45 = require("../r4-resources/Observation-unsat.json");
		 expect(observationValidateFunction(observationExample45)).toBe(true);
	 });

	 test("validate Observation-vitals-panel.json", () => {
		 const observationExample46 = require("../r4-resources/Observation-vitals-panel.json");
		 expect(observationValidateFunction(observationExample46)).toBe(true);
	 });

	 test("validate Observation-vomiting.json", () => {
		 const observationExample47 = require("../r4-resources/Observation-vomiting.json");
		 expect(observationValidateFunction(observationExample47)).toBe(true);
	 });

	 test("validate Observation-vp-oyster.json", () => {
		 const observationExample48 = require("../r4-resources/Observation-vp-oyster.json");
		 expect(observationValidateFunction(observationExample48)).toBe(true);
	 });

});