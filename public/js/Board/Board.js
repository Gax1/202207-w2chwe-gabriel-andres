const Cell = require("../Cell/Cell");

class Board {
  rows;
  cols;
  boxes;

  constructor(rows = 3, cols = 3) {
    this.rows = rows;
    this.cols = cols;
    this.boxes = this.createBoxes();
  }

  createBoxes() {
    const boxes = new Array(this.cols).fill(
      new Array(this.rows).fill(new Cell())
    );
    return boxes;
  }
}

module.exports = Board;
