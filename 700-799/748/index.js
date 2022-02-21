/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  const map = {};
  const sentence = licensePlate
    .toLocaleLowerCase()
    .replace(/((?![a-z]).)*/g, "");
  for (let w of sentence) {
    map[w] ? map[w]++ : (map[w] = 1);
  }

  let result = null;
  for (let word of words) {
    if (isShortestCompletingWord(word, map)) {
      if (result === null || word.length < result.length) {
        result = word;
      }
    }
  }

  return result;
};

const isShortestCompletingWord = (word, map) => {
  const arrange = { ...map };

  for (let w of word) {
    arrange.hasOwnProperty(w) && arrange[w]--;
  }

  for (let i in arrange) {
    if (arrange[i] > 0) return false;
  }

  return true;
};
