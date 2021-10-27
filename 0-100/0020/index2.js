/**
 * 判断字符串是否为有效字符串
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false;

  const stack = [];
  const patternMap = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  for (let i = 0; i < s.length; i++) {
    if (patternMap.has(s[i])) {
      // 右括号匹配栈中数据
      // 栈为空, 右括号不匹配左括号
      if (
        stack.length === 0 ||
        patternMap.get(s[i]) !== stack[stack.length - 1]
      ) {
        return false;
      } else {
        // 栈尾数据出栈
        stack.pop();
      }
    } else {
      // 左括号入栈
      stack.push(s[i]);
    }
  }

  return stack.length === 0;
};
