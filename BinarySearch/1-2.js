/**
 * 374. 猜数字大小
 * https://leetcode-cn.com/problems/guess-number-higher-or-lower/
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 0,
    right = n;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (guess(mid) === 1) {
      left = mid + 1;
    } else if (guess(mid) === -1) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
};
