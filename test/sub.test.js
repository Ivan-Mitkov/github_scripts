const sub = require("../src/sub");

it("should return correct substract", () => {
  const result = sub(5, 2);
  expect(result).toBe(3);
});
