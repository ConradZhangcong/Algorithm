/**
 * 69. x 的平方根
 * https://leetcode-cn.com/problems/sqrtx/
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0,
    right = x;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return right;
};
