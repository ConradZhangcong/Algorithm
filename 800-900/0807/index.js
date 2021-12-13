/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  const m = grid.length;
  const mCol = new Array(m).fill(0);
  const mRow = new Array(m).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      mCol[i] = Math.max(grid[i][j], mCol[i]);
      mRow[j] = Math.max(grid[i][j], mRow[j]);
    }
  }

  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      result += Math.min(mCol[i], mRow[j]) - grid[i][j];
      grid[i][j] = Math.min(mCol[i], mRow[j]);
    }
  }

  return result;
};
