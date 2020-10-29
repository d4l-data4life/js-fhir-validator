const episodeofcareValidateFunction = require("../../r4/js/EpisodeOfCare");

describe("EpisodeOfCare", () => {
	 test("validate EpisodeOfCare-example.json", () => {
		 const episodeofcareExample1 = require("../r4-resources/EpisodeOfCare-example.json");
		 expect(episodeofcareValidateFunction(episodeofcareExample1)).toBe(true);
	 });

});