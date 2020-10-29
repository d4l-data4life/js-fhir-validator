const slotValidateFunction = require("../../r4/js/Slot");

describe("Slot", () => {
	 test("validate Slot-1.json", () => {
		 const slotExample1 = require("../r4-resources/Slot-1.json");
		 expect(slotValidateFunction(slotExample1)).toBe(true);
	 });

	 test("validate Slot-2.json", () => {
		 const slotExample2 = require("../r4-resources/Slot-2.json");
		 expect(slotValidateFunction(slotExample2)).toBe(true);
	 });

	 test("validate Slot-3.json", () => {
		 const slotExample3 = require("../r4-resources/Slot-3.json");
		 expect(slotValidateFunction(slotExample3)).toBe(true);
	 });

	 test("validate Slot-example.json", () => {
		 const slotExample4 = require("../r4-resources/Slot-example.json");
		 expect(slotValidateFunction(slotExample4)).toBe(true);
	 });

});