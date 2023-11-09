/**
 * @param {string} s
 * @return {number}
 */
function findTheLongestBalancedSubstring(s) {
  const point = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0" && s[i + 1] === "1") {
      point.push(i);
    }
  }

  let max = 0;
  for (const p of point) {
    let i = 0;
    while (true) {
      if (s[p + i + 1] === '1' && s[p - i] === '0' && p + i + 1 <= s.length && p - i >= 0) {
        i++
      } else {
        break
      }
    }
    max = Math.max(max, i * 2)
  }

  return max;
}

console.log(findTheLongestBalancedSubstring("01000111"));
