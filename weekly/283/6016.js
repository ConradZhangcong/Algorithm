/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  const [col1, row1, , col2, row2] = s;

  const rows = ~~row2 - ~~row1;
  const charCol1 = col1.charCodeAt();
  const charCol2 = col2.charCodeAt();

  let result = [];

  for (let i = 0; i <= charCol2 - charCol1; i++) {
    const char = String.fromCharCode(charCol1 + i);
    for (let j = 0; j <= rows; j++) {
      result.push(`${char}${~~row1 + j}`);
    }
  }

  return result;
};
