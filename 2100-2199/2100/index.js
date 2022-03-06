/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function (security, time) {
  const length = security.length;
  if (time === 0) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(i);
    }
    return arr;
  }
  if (length <= time * 2) return [];

  const result = [];
  for (let i = time; i < length - time; i++) {
    // 左侧递增
    let leftFlag = true;
    for (let j = i - time; j < i; j++) {
      if (security[j] < security[j + 1]) {
        leftFlag = false;
      }
    }

    if (!leftFlag) continue;

    // 右侧递减
    let rightFlag = true;
    for (let j = i; j < i + time; j++) {
      if (security[j] > security[j + 1]) {
        rightFlag = false;
      }
    }

    if (rightFlag) {
      result.push(i);
    }
  }

  return result;
};
