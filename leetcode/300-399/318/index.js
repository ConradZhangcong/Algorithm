/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  const isOverlap = (word, arr) => {
    for (const w of word) {
      if (arr[w.charCodeAt() - 97]) {
        return true;
      }
    }

    return false;
  };

  const sumList = [];

  for (let i = 0; i < words.length; i++) {
    const bitArr = new Array(26).fill(false);
    for (const w of words[i]) {
      bitArr[w.charCodeAt() - 97] = true;
    }

    for (let j = i + 1; j < words.length; j++) {
      if (!isOverlap(words[j], bitArr)) {
        sumList.push(words[i].length * words[j].length);
      }
    }
  }

  return sumList.length === 0 ? 0 : Math.max(...sumList);
};
