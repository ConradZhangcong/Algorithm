/**
 * 479. 最大回文数乘积
 * https://leetcode-cn.com/problems/largest-palindrome-product/
 * [9, 987, 123, 597, 677, 1218, 877, 475]
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function (n) {
  if (n === 1) return 9;
  
  const max = 10 ** n - 1; // 左边最大位数

  for (let left = max; left > max / 10; left--) {
    // 反转拼接可能的数字
    const right = String(left).split("").reverse().join("");
    const num = BigInt(left + right);
    let x = BigInt(max);
    while (x * x >= num) {
      if (num % x === BigInt(0)) {
        return num % BigInt(1337);
      }
      x--;
    }
  }
};
