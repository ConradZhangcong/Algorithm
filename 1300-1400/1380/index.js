/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const minRows = new Array(m).fill(Number.MAX_SAFE_INTEGER);
  const maxCols = new Array(n).fill(0);
  const result = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      minRows[i] = Math.min(minRows[i], matrix[i][j]);
      maxCols[j] = Math.max(maxCols[j], matrix[i][j]);
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === minRows[i] && matrix[i][j] === maxCols[j]) {
        result.push(matrix[i][j]);
      }
    }
  }

  return result;
};
