const DICT = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];

/**
 * 804. 唯一摩尔斯密码词
 * https://leetcode-cn.com/problems/unique-morse-code-words/
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const set = new Set();

  for (let i = 0; i < words.length; i++) {
    set.add(geteMorseRepresentation(words[i]));
  }

  return set.size;
};

const geteMorseRepresentation = (word) => {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    result += DICT[word.charCodeAt(i) - 97];
  }

  return result;
};
