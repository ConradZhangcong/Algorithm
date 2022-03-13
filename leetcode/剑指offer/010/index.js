/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0,
    b = 1,
    r = 1;

  for (let i = 2; i < n; i++) {
    a = b;
    b = r;
    r = a + b;
    if (r > 1000000007) {
      r -= 1000000007;
    }
  }

  return r;
};
