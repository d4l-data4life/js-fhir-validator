const compositionValidateFunction = require("../../stu3/js/Composition");

describe("Composition", () => {
  test("validate Composition-example.json", () => {
    const compositionExample1 = require("../stu3-resources/Composition-example.json");
    console.log(compositionValidateFunction(compositionExample1));
    console.log(compositionValidateFunction.errors);
    expect(compositionValidateFunction(compositionExample1)).toBe(true);
  });
});
