/**
 * 796. 旋转字符串
 * https://leetcode-cn.com/problems/rotate-string/
 * s+s包含所有s通过旋转的字符串, 只要判断goal是否为s+s的子字符串即可
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  return s.length === goal.length && (s + s).indexOf(goal) !== -1;
};
