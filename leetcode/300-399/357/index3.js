/**
 * 357. 统计各位数字都不同的数字个数
 * https://leetcode-cn.com/problems/count-numbers-with-unique-digits/
 * 打表
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  return [1, 10, 91, 739, 5275, 32491, 168571, 712891, 2345851][n];
};
