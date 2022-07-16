const Board = require("./Board");

describe("Given a constructor", () => {
  describe("When its called and not recives any parameter", () => {
    test("It should return an array with sub-arrays and inside should have instance of the object Cell", () => {
      const expectedTotal = {
        boxes: [
          [
            { isAlive: false, willDie: false },
            { isAlive: false, willDie: false },
            { isAlive: false, willDie: false },
          ],
          [
            { isAlive: false, willDie: false },
            { isAlive: false, willDie: false },
            { isAlive: false, willDie: false },
          ],
          [
            { isAlive: false, willDie: false },
            { isAlive: false, willDie: false },
            { isAlive: false, willDie: false },
          ],
        ],
        cols: 3,
        rows: 3,
      };
      const total = new Board();

      expect(total).toEqual(expectedTotal);
    });
  });
});
