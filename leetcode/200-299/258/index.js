/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  const n = num.toString();
  let result = 0;
  for (let c of n) {
    result += ~~c;
    if (result > 9) {
      result -= 9;
    }
  }
  return result;
};
