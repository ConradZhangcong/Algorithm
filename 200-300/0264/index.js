/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  if (n === 1) return 1;

  const result = new Array(n).fill(0);
  result[0] = 1;

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;

  for (let i = 1; i < n; i++) {
    const n1 = result[p1] * 2;
    const n2 = result[p2] * 3;
    const n3 = result[p3] * 5;

    const num = Math.min(n1, n2, n3);

    if (n1 === num) {
      p1++;
    }
    if (n2 === num) {
      p2++;
    }
    if (n3 === num) {
      p3++;
    }

    result[i] = num;
  }

  return result[n - 1];
};

console.log(nthUglyNumber(2));
