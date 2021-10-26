const searchMatrix = (matrix, target) => {
  if (target < matrix[0][0]) return false;

  const m = matrix.length;
  const n = matrix[0].length
  if (target > matrix[m - 1][n - 1]) return false;

  for (let i = 0; i < m; i++) {
    // 首项比较
    if (matrix[i][0] > target) return false;
    // 二分查找
    let l = 0;
    let r = n - 1;
    while (l <= r) {
      const mid = l + ((r - l) >> 1);
      if (matrix[i][mid] < target) {
        l = mid + 1;
      } else if (matrix[i][mid] > target) {
        r = mid - 1;
      } else {
        return true;
      }
    }
  }

  return false;
};