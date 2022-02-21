/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  generateValidate([], n, 0, 0, result);
  return result;
};

const generateValidate = (arr, max, left, right, result) => {
  if (arr.length === max * 2) {
    result.push(arr.join(""));
    return;
  }
  if (left < max) {
    arr.push("(");
    generateValidate(arr, max, left + 1, right, result);
    arr.pop();
  }
  if (right < left) {
    arr.push(")");
    generateValidate(arr, max, left, right + 1, result);
    arr.pop();
  }
};
