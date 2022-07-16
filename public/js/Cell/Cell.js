class Cell {
  isAlive;
  willDie = false;

  constructor(isAlive = false) {
    this.isAlive = isAlive;
  }
}

module.exports = Cell;
