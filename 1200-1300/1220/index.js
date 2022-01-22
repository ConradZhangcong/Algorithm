const map = {
  a: ["e"],
  e: ["a", "i"],
  i: ["a", "e", "o", "u"],
  o: ["i", "u"],
  u: ["a"],
};

/**
 * @param {number} n
 * @return {number}
 */
const countVowelPermutation = (n) => {
  if (n === 1) return 5;
  let result = {
    a: 1n,
    e: 1n,
    i: 1n,
    o: 1n,
    u: 1n,
  };

  while (n > 1) {
    const temp = {};
    for (let char in result) {
      const charMap = map[char];
      for (let j of charMap) {
        temp[j] ? (temp[j] += result[char]) : (temp[j] = result[char]);
      }
    }
    result = temp;
    n--;
  }

  return getCount(result);
};

const getCount = (m) => {
  let result = 0n;
  for (let i in m) {
    result += m[i];
  }
  result = result % 1000000007n;
  return Number(result);
};
