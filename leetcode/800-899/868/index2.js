/**
 * 868. 二进制间距
 * https://leetcode-cn.com/problems/binary-gap/
 * 将数字转为字符串, 双指针判断
 * @param {number} n
 * @return {number}
 */
 var binaryGap = function (n) {
  const str = Number(n).toString(2);
  let gap = 0;

  for (let left = null, right = 0; right < str.length; right++) {
    if (str[right] === "1") {
      if (left !== null) {
        const dis = right - left;
        if (dis > gap) {
          gap = dis;
        }
      }
      left = right;
    }
  }

  return gap;
};
