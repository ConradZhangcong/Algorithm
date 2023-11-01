/**
 * 面试题 17.14. 最小 K 个数
 * 链接：https://leetcode-cn.com/problems/smallest-k-lcci
 */
var smallestK = function (arr, k) {
  arr.sort((a, b) => a - b);
  return arr.slice(0, k);
};
