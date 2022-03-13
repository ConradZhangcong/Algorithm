/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {
  const length = data.length;
  let index = 0;

  while (index < length) {
    const unicodeStr = getUnicodeStr(data[index]);
    if (unicodeStr.startsWith("11110")) {
      for (let i = 1; i < 4; i++) {
        if (!getUnicodeStr(data[index + i]).startsWith("10")) {
          return false;
        }
      }
      index += 4;
    } else if (unicodeStr.startsWith("1110")) {
      for (let i = 1; i < 3; i++) {
        if (!getUnicodeStr(data[index + i]).startsWith("10")) {
          return false;
        }
      }
      index += 3;
    } else if (unicodeStr.startsWith("110")) {
      for (let i = 1; i < 2; i++) {
        if (!getUnicodeStr(data[index + i]).startsWith("10")) {
          return false;
        }
      }
      index += 2;
    } else if (unicodeStr.startsWith("0")) {
      index++;
    } else {
      return false;
    }
  }

  return true;
};

const getUnicodeStr = (num) => {
  return Number(num).toString(2).padStart(8, "0");
};
