class Board {
  constructor(size) {
    this.board = [];
    for (let row = 0; row < size; row += 1) {
      this.board.push([]);
      for (let col = 0; col < size; col += 1) {
        this.board[row].push(false);
      }
    }
  }

  togglePiece(row, col) {
    this.board[row][col] = !this.board[row][col];
    return this.board;
  }
  hasBeenVisited(row, col) {
    return this.board[row][col];
  }
}

class RobotPaths {
  // initialize all your options
  // you may want to change this code later on, too
  constructor(size) {
    this.board = new Board(size);
    this.row = 0;
    this.col = 0;
  }

  solve() {
    const dim = this.board.board.length;
    // const row = 1
    // const col = 1
    let pathCount = 0;
    const move = (row, col) => {
      // console.log("in move", row, col);
      //console.log(row, col, dim, !this.board.hasBeenVisited(row + 1,col))
      this.board.togglePiece(row, col);
      if (row === dim - 1 && col === dim - 1) {
        // console.log("hit");
        pathCount++;
        // console.log(pathCount);
      }
      if (row + 1 < dim) {
        if (!this.board.hasBeenVisited(row + 1, col)) {
          // console.log("row + 1");
          move(row + 1, col);
        }
      }
      if (row - 1 >= 0) {
        if (!this.board.hasBeenVisited(row - 1, col)) {
          // console.log("row - 1");
          move(row - 1, col);
        }
      }
      if (col + 1 < dim) {
        if (!this.board.hasBeenVisited(row, col + 1)) {
          // console.log("col + 1");
          move(row, col + 1);
        }
      }
      if (col - 1 >= 0) {
        if (!this.board.hasBeenVisited(row, col - 1)) {
          // console.log("col - 1");
          move(row, col - 1);
        }
      }
      this.board.togglePiece(row, col);
      return pathCount;
    };
    move(0, 0);
    // console.log(pathCount);
    return pathCount;
  }
}

module.exports = { RobotPaths };
