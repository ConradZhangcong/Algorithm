/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
  const result = [];
  while (n > 1) {
    for (let i = 1; i < n; i++) {
      if (isSimple(i, n)) result.push(`${i}/${n}`);
    }
    n--;
  }
  return result;
};

const isSimple = (numerator, denominator) => {
  if (numerator === 1) return true;

  let n = 2;
  while (numerator >= n) {
    if (numerator % n === 0 && denominator % n === 0) {
      return false;
    }
    n++;
  }

  return true;
};
