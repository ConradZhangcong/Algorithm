/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
  let res = 0;
  for (i = 2; i <= n; i++) {
    while (n % i === 0) {
      res += i;
      n /= i;
    }
  }
  return res;
};
