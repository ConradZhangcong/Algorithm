/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  // 循环字符串判断是否符合条件
  let lateFlag = 0; // 迟到不能连续超过3
  let absentFlag = 0; // 缺勤不能超过2
  for (let i = 0; i < s.length; i++) {
    const current = s[i];

    switch (current) {
      // 缺勤 缺勤次数+1 迟到标记重置
      case "A":
        absentFlag++;
        lateFlag = 0;
        break;
      // 迟到 迟到标记+1
      case "L":
        lateFlag++;
        break;
      // 到场 迟到标记重置
      case "P":
        lateFlag = 0;
        break;
      default:
        break;
    }

    // 迟到连续>=3
    if (lateFlag === 3) {
      return false;
    }
    // 缺勤次数>=2
    if (absentFlag === 2) {
      return false;
    }
  }
  return true;
};
