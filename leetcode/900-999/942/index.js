/**
 * 942. 增减字符串匹配
 * https://leetcode.cn/problems/di-string-match/
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  const n = s.length;
  let lo = 0,
    hi = n;
  const perm = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    perm[i] = s[i] === "I" ? lo++ : hi--;
  }

  perm[n] = lo;
  return perm;
};
