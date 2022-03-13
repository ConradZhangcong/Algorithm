/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  generateAll(new Array(n * 2), 0, result);
  return result;
};

const generateAll = (arr, index, result) => {
  if (index === arr.length) {
    const str = arr.join("");
    isValid(str) && result.push(str);
  } else {
    arr[index] = "(";
    generateAll(arr, index + 1, result);
    arr[index] = ")";
    generateAll(arr, index + 1, result);
  }
};

const isValid = (s) => {
  let tag = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      tag++;
    } else {
      tag--;
    }

    if (tag < 0) {
      return false;
    }
  }

  return tag === 0;
};
