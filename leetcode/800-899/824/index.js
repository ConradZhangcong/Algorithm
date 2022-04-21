const DICT = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

/**
 * 824. 山羊拉丁文
 * https://leetcode-cn.com/problems/goat-latin/
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const arr = sentence.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (DICT.includes(arr[i][0])) {
      arr[i] += "ma";
    } else {
      arr[i] = arr[i].substring(1) + arr[i].substring(0, 1) + "ma";
    }
    for (let j = 0; j < i + 1; j++) {
      arr[i] += "a";
    }
  }

  return arr.join(" ");
};
