/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  if (n === 1) return 0;
  let count = 0;
  while (n > 1) {
    const mid = n >> 1;
    n = n % 2 === 1 ? mid + 1 : mid;
    count += mid;
  }
  return count;
};
