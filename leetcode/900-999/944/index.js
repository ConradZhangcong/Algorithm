/**
 * 944. 删列造序
 * https://leetcode.cn/problems/delete-columns-to-make-sorted/
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let ans = 0;
  const n = strs.length;
  const m = strs[0].length;
  for (let j = 0; j < m; j++) {
    for (let i = 0; i < n - 1; i++) {
      if (strs[i][j] > strs[i + 1][j]) {
        ans++;
        break;
      }
    }
  }

  return ans;
};
