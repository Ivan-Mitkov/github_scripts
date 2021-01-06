const sub = require("../src/sub");

it("should return correct substract", () => {
  const result = sub(10, 2);
  expect(result).toBe(8);
});
