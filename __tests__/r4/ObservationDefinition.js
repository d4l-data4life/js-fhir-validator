const observationdefinitionValidateFunction = require("../../r4/js/ObservationDefinition");

describe("ObservationDefinition", () => {
	 test("validate ObservationDefinition-example.json", () => {
		 const observationdefinitionExample1 = require("../r4-resources/ObservationDefinition-example.json");
		 expect(observationdefinitionValidateFunction(observationdefinitionExample1)).toBe(true);
	 });

});