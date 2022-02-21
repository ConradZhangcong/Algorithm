/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // 行
  for (let i = 0; i < 9; i++) {
    const set = new Set();
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") continue;
      if (set.has(board[i][j])) return false;
      set.add(board[i][j]);
    }
  }

  // 列
  for (let i = 0; i < 9; i++) {
    const set = new Set();
    for (let j = 0; j < 9; j++) {
      if (board[j][i] === ".") continue;
      if (set.has(board[j][i])) return false;
      set.add(board[j][i]);
    }
  }

  // 块
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const set = new Set();
      for (let m = i; m < i + 3; m++) {
        for (let n = j; n < j + 3; n++) {
          if (board[m][n] === ".") continue;
          if (set.has(board[m][n])) return false;
          set.add(board[m][n]);
        }
      }
    }
  }

  return true;
};
