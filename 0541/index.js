/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function (s, k) {
  if (s.length === 1) return s;
  if (k === 1) return s;

  const result = [];

  let current = 0;
  while (current < s.length) {
    // 每k个数字为一组n n从0开始 2n反转 n正常
    const n = parseInt(current / k); // 当前组
    if (n % 2 === 0) {
      // 2n 反转
      result.splice(n * k, 0, s[current]);
    } else {
      // 1n 正常
      result.push(s[current]);
    }

    current++;
  }

  return result.join("");
};
