/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let num = 0;

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") {
      num++;
    } else if (s[i] === "R") {
      num--;
    }

    if (num === 0) {
      result++;
    }
  }

  return result;
};
