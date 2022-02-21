/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  let res = "";
  for (let i of s) {
    if (i === " ") {
      k--;
      if (k === 0) return res;
    }
    res += i;
  }

  return res;
};
