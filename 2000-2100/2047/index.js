/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
  const wordArr = sentence.split(" ");
  let result = 0;
  for (let w of wordArr) {
    if (w === "") continue;
    if (checkWord(w)) {
      result++;
    }
  }
  return result;
};

const specialWords = ["!", ".", ",", "-"];
const markWords = ["!", ".", ","];

const checkWord = (word) => {
  const length = word.length;
  let splitCount = 0;
  for (let i = 0; i < length; i++) {
    if (!isLetter(word[i]) && !specialWords.includes(word[i])) {
      return false;
    }
    if (markWords.includes(word[i]) && i !== length - 1) {
      return false;
    }
    if (word[i] === "-") {
      if (
        i - 1 >= 0 &&
        i + 1 <= length &&
        isLetter(word[i - 1]) &&
        isLetter(word[i + 1])
      ) {
        splitCount++;
        if (splitCount > 1) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return true;
};

const isLetter = (w) => w >= "a" && w <= "z";
