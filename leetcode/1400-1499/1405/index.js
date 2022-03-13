/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
const longestDiverseString = (a, b, c) => {
  const map = { a, b, c };
  let str = "";
  let secondLast = ""; // 最后第二个字母
  let last = ""; // 最后一个字母
  while (a > 0 || b > 0 || c > 0) {
    const max = getMaxStr(map, secondLast, last);
    if (!max) return str;

    str += max;
    map[max]--;
    // 替换最后两个字母
    secondLast = last;
    last = max;
  }

  return str;
};

const getMaxStr = (map, secondLast, last) => {
  if (map.a === 0 && map.b === 0 && map.c === 0) {
    return "";
  }

  if (secondLast === last && secondLast !== "") {
    if (last === "a") {
      return map.b >= map.c && map.b > 0 ? "b" : map.c > 0 ? "c" : "";
    } else if (last === "b") {
      return map.a >= map.c && map.a > 0 ? "a" : map.c > 0 ? "c" : "";
    } else if (last === "c") {
      return map.a >= map.b && map.a > 0 ? "a" : map.b > 0 ? "b" : "";
    }
  }

  if (map.a >= map.b && map.a >= map.c && map.a > 0) {
    return "a";
  }
  if (map.b >= map.a && map.b >= map.c && map.b > 0) {
    return "b";
  }
  if (map.c >= map.a && map.c >= map.b && map.c > 0) {
    return "c";
  }
  return "";
};
