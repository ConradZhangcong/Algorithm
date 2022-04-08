/**
 * 796. 旋转字符串
 * https://leetcode-cn.com/problems/rotate-string/
 * 模拟旋转 对比是否有相同的
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  const length = s.length;
  if (length !== goal.length) return false;

  let strArr = s.split("");
  for (let i = 0; i < length; i++) {
    strArr.push(strArr.shift());
    const str = strArr.join("");
    if (str === goal) return true;
  }

  return false;
};
