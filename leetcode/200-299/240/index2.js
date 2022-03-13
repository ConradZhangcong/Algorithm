const searchMatrix = (matrix, target) => {
  if (target < matrix[0][0]) return false;

  const m = matrix.length;
  const n = matrix[0].length;
  if (target > matrix[m - 1][n - 1]) return false;

  let x = 0,
    y = n - 1;

  while (x <= m - 1 && y >= 0) {
    if (matrix[x][y] === target) return true;
    if (matrix[x][y] > target) {
      y--;
    } else {
      x++;
    }
  }

  return false;
};