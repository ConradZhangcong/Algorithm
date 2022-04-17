/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const list = paragraph
    .toLocaleLowerCase()
    .replace(/[!?',;.]/g, " ")
    .split(" ");
  const map = new Map();
  for (let i = 0; i < list.length; i++) {
    if (banned.includes(list[i])) continue;
    if (list[i] === "") continue;

    map.set(list[i], (map.get(list[i]) || 0) + 1);
  }

  let max = 0;
  let result = "";
  for (let [key, value] of map) {
    if (value > max) {
      max = value;
      result = key;
    }
  }

  return result;
};

console.log(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]));
