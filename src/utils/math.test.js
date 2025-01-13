const { add, subtract } = require("./math");

describe("math.js", () => {
  test("Adds numbers", () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });
  test("Subtracts numbers", () => {
    const result = subtract(10, 5);
    expect(result).toBe(5);
  });
});
