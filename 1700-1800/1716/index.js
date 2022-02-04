/**
 * 暴力
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  let result = 0;
  let week = 0;
  for (let i = 1; i <= n; i++) {
    result += i - week * 6;
    if (i !== 0 && i % 7 === 0) {
      week++;
    }
  }
  return result;
};
