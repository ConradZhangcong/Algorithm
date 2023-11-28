/**
 * @param {string} s
 * @return {number}
 */
function findTheLongestBalancedSubstring(s) {
  let res = 0
  const count = new Array(2).fill(0)
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      count[1]++
      res = Math.max(res, Math.min(count[0], count[1]) * 2)
    } else if (s[i - 1] === '1' || i === '0') {
      count[1] = 0
      count[0] = 1
    } else {
      count[0]++
    }
  }

  return res
}

console.log(findTheLongestBalancedSubstring('1010'))
