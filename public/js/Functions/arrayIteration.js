const Board = require("../Board/Board");

const bordercito = new Board(6, 6);

const positionsOfCells = (tableGame) => {
  const positionsOf = [];
  tableGame.boxes.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      positionsOfCells.push(rowIndex);
    });
  });
  return positionsOfCells;
};
console.log(positionsOfCells(bordercito));
