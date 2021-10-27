/**
 * 判断字符串是否为有效字符串
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false;
  const reg = /\(\)|\[\]|\{\}/g;

  while (reg.test(s)) {
    s = s.replace(reg, "");
  }

  return s.length === 0;
};


console.log(isValid( "()"))