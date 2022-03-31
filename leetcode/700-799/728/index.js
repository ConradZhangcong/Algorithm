/**
 * 728. 自除数
 * https://leetcode-cn.com/problems/self-dividing-numbers/
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const result = [];
  for (let i = left; i <= right; i++) {
    if (isSelfDividingNumber(i)) result.push(i);
  }
  return result;
};

/** 数字是否为自除数 */
const isSelfDividingNumber = (num) => {
  const str = num.toString();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0' || num % str[i] !== 0) {
      return false;
    }
  }
  return true;
};
