/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const arr1 = s1.split(" ");
  const arr2 = s2.split(" ");
  const map = new Map();
  for (let i of arr1) {
    map.has(i) ? map.set(i, 2) : map.set(i, 1);
  }
  for (let i of arr2) {
    map.has(i) ? map.set(i, 2) : map.set(i, 1);
  }
  const result = [];
  for (let [key, value] of map) {
    if (value === 1) {
      result.push(key);
    }
  }
  return result;
};
