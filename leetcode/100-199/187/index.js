/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  if (s.length < 10) return [];

  const result = new Set();

  for (let i = 0; i < s.length - 10; i++) {
    const cur = s.substring(i, i + 10);
    for (let j = i + 1; j <= s.length - 10; j++) {
      const comp = s.substring(j, j + 10);
      if (cur === comp) {
        result.add(cur);
        break;
      }
    }
  }

  return [...result];
};
