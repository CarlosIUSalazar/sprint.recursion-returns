class Board {
  constructor(size) {
    this.board = [];
    this.size = size; //added
    for (let row = 0; row < size; row += 1) {
      this.board.push([]);
      for (let col = 0; col < size; col += 1) {
        this.board[row].push(false);
      }
    }
  }
  togglePiece(row, col) {
    this.board[row][col] = !this.board[row][col];
    //return this.board;
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
    // Your code here.
    const dimensions = this.board.size;
    //console.log("AAAAAAAAA", dimensions);
    let pathNumber = 0;
    const move = (row, col) => {
      this.board.togglePiece(row, col);
      //if goal
      if (row === dimensions - 1 && col === dimensions - 1) {
        pathNumber++;
      } else {
        // If surrounding blocks are false
        if (row < dimensions - 1 && !this.board.hasBeenVisited(row + 1, col)) {
          move(row + 1, col);
        }
        if (row > 0 && !this.board.hasBeenVisited(row - 1, col)) {
          move(row - 1, col);
        }
        if (col > 0 && !this.board.hasBeenVisited(row, col - 1)) {
          move(row, col - 1);
        }
        if (col < dimensions - 1 && !this.board.hasBeenVisited(row, col + 1)) {
          move(row, col + 1);
        }
      }
      this.board.togglePiece(row, col);
      //console.log("ZZZZZZZZZZZZ", pathNumber); bad idea
      return pathNumber;
    };
    move(0, 0);
    //console.log("XXXXXXXXXXXX", pathNumber);
    return pathNumber;
  }
}

module.exports = {
  RobotPaths,
};
