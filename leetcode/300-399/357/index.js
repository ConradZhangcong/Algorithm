/**
 * 357. 统计各位数字都不同的数字个数
 * https://leetcode-cn.com/problems/count-numbers-with-unique-digits/
 * 暴力计算(超时)
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  let result = 0;

  for (let i = 0; i < Math.pow(10, n); i++) {
    if (isNumberWithUniqueDigits(i)) result++;
  }

  return result;
};

const isNumberWithUniqueDigits = (num) => {
  if (num < 10) {
    return true;
  }

  const str = num.toString();
  const set = new Set();
  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i])) {
      return false;
    } else {
      set.add(str[i]);
    }
  }

  return true;
};
