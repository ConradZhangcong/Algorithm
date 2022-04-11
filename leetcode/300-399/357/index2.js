/**
 * 357. 统计各位数字都不同的数字个数
 * https://leetcode-cn.com/problems/count-numbers-with-unique-digits/
 * 找规律, n=0时, res=1; n=1时, res=10; n=2时, 两位数, 第一位的可能是1-9(9位), 第二位的可能是除了第一位的个数(9位)
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  if (n === 0) return 1;
  if (n === 1) return 10;

  let result = 10;
  let current = 9;

  for (let i = 0; i < n - 1; i++) {
    current *= 9 - i;
    result += current;
  }

  return result;
};
