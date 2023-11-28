/** 特殊字符集合 */
const encodeMap = {
  quot: '"',
  apos: "'",
  amp: "&",
  gt: ">",
  lt: "<",
  frasl: "/",
};

/**
 * @param {string} text
 * @return {string}
 */
const entityParser = (text) => {
  const length = text.length;
  let res = "";

  for (let i = 0; i < length; i++) {
    if (text[i] === "&") {
      let temp = "";
      for (let j = i + 1; j < i + 6 && j < length; j++) {
        if (text[j] === ";") {
          break;
        } else {
          temp += text[j];
        }
      }
      if (encodeMap[temp]) {
        res += encodeMap[temp];
        i += temp.length + 1;
        continue;
      }
    }

    res += text[i];
  }

  return res;
};


console.log(entityParser("and I quote: &quot;...&quot;"))
