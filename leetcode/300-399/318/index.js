/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  const length = words.length;
  const masks = new Array(length).fill(0);

  for (let i = 0; i < length; i++) {
    const word = words[i];
    const wordLength = word.length;
    for (let j = 0; j < wordLength; j++) {
      masks[i] |= 1 << (word[j].charCodeAt() - "a".charCodeAt());
    }
  }
};
