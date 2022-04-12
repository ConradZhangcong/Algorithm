/**
 * 806. 写字符串需要的行数
 * https://leetcode-cn.com/problems/number-of-lines-to-write-string/
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let rows = 0;
  let counts = 0;
  for (let i = 0; i < s.length; i++) {
    counts += widths[s.charCodeAt(i) - 97];
    if (counts > 100) {
      rows++;
      counts = widths[s.charCodeAt(i) - 97];
    }
  }

  return [rows, counts];
};
