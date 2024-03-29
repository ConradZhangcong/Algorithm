/**
 * 面试题 01.05. 一次编辑
 * https://leetcode.cn/problems/one-away-lcci/
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
  const m = first.length,
    n = second.length;
  if (n - m === 1) {
    return oneInsert(first, second);
  } else if (m - n === 1) {
    return oneInsert(second, first);
  } else if (m === n) {
    let foundDifference = false;
    for (let i = 0; i < m; i++) {
      if (first[i] != second[i]) {
        if (!foundDifference) {
          foundDifference = true;
        } else {
          return false;
        }
      }
    }
    return true;
  } else {
    return false;
  }
};

const oneInsert = (shorter, longer) => {
  const length1 = shorter.length,
    length2 = longer.length;
  let index1 = 0,
    index2 = 0;
  while (index1 < length1 && index2 < length2) {
    if (shorter[index1] == longer[index2]) {
      index1++;
    }
    index2++;
    if (index2 - index1 > 1) {
      return false;
    }
  }
  return true;
};
