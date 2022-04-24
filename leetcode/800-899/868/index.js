/**
 * 868. 二进制间距
 * https://leetcode-cn.com/problems/binary-gap/
 * 位运算
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  let ans = 0;
  let left = -1;

  for (let i = 0; n !== 0; i++) {
    if (n & (1 === 1)) {
      if (left !== -1) {
        ans = Math.max(i - left, ans);
      }
      left = i;
    }
    n >>= 1;
  }

  return ans;
};
