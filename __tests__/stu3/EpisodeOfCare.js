const episodeofcareValidateFunction = require("../../stu3/js/EpisodeOfCare");

describe("EpisodeOfCare", () => {
	 test("validate EpisodeOfCare-example.json", () => {
		 const episodeofcareExample1 = require("../stu3-resources/EpisodeOfCare-example.json");
		 expect(episodeofcareValidateFunction(episodeofcareExample1)).toBe(true);
	 });

});