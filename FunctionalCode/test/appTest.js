const assert = require("chai").assert;
const app = require("../test");

//Results
showCountNumber = app.showCount();
describe("Test for correct number of items", () => {
  it("Check if number of items is correct", () => {
    assert.typeOf(showCountNumber, "number");
  });
});
