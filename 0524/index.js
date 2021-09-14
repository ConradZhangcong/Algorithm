const findLongestWord = (s, dictiondary) => {
  let result = "";

  for (let word of dictiondary) {
    // 判断字符串是否符合条件
    if (isInDict(s, word)) {
      if (result) {
        if (result.length < word.length) {
          // 获取长度较大的字符串
          result = word;
        } else if (result.length === word.length) {
          // 若字符串已存在则比较字典序
          result = compareOrder(result, word);
        }
      } else {
        result = word;
      }
    }
  }

  return result;
};

/**
 * 比较两个字符串的字典序 返回字典序较小的字符串
 */
const compareOrder = (s1, s2) => {
  for (let i = 0; i < s1.length; i++) {
    if (s1.charCodeAt(i) < s2.charCodeAt(i)) {
      return s1;
    } else if (s1.charCodeAt(i) > s2.charCodeAt(i)) {
      return s2;
    }
  }
  return s1;
};

/**
 * 判断字符串是否在s中
 */
const isInDict = (s, word) => {
  // 双指针判断是否相同
  let sp = 0,
    wp = 0;

  if (s.length < word.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (s[sp] === word[wp]) {
      // 当前下标的位置相同则全部往前走一步
      sp++;
      wp++;
    } else {
      // 不同则只有s的指针往前走一步
      sp++;
    }
  }

  return wp === word.length;
};
