const Cell = require("./Cell");

describe("Given a constructor of a Cell object", () => {
  describe("When its called and not recives any parameter", () => {
    test("Then it should return an object with two properties, and the property isAlive should be false", () => {
      const expectedTotal = { isAlive: false, willDie: false };

      const total = new Cell();

      expect(total).toEqual(expectedTotal);
    });
  });
});
