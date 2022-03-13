/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  if (numRows === 1) return s;
  const length = s.length;
  if (numRows > length) return s;

  let str = "";

  for (let i = 0; i < numRows; i++) {
    let index = i;
    str += s[index];
    const isBoundary = i === 0 || i === numRows - 1;
    const step1 = isBoundary ? (numRows - 1) * 2 : (numRows - i - 1) * 2;
    const step2 = isBoundary ? (numRows - 1) * 2 : 2 * i;
    while (true) {
      index += step1;
      if (index < length) {
        str += s[index];
      } else {
        break;
      }
      index += step2;
      if (index < length) {
        str += s[index];
      } else {
        break;
      }
    }
  }

  return str;
};
