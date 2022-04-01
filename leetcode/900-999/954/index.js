/**
 * 954. 二倍数对数组
 * https://leetcode-cn.com/problems/array-of-doubled-pairs/
 * 排序后遍历
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function (arr) {
  const length = arr.length;
  arr.sort((x, y) => x - y);

  const flag = new Array(length).fill(false);

  let left = 0;
  let right = 1;

  while (right < length) {
    if (flag[left]) {
      left++;
      continue;
    }
    if (flag[right]) {
      right++;
      continue;
    }
    if (left > right) {
      right = left + 1;
    }

    if (arr[left] >= 0) {
      if (arr[left] * 2 === arr[right]) {
        flag[left] = true;
        flag[right] = true;
        left++;
        right++;
      } else {
        right++;
      }
    } else if (arr[left] < 0) {
      if (arr[right] > 0) {
        return false;
      }
      if (arr[left] === arr[right] * 2) {
        flag[left] = true;
        flag[right] = true;
        left++;
        right++;
      } else {
        right++;
      }
    }
  }

  return !flag.filter((item) => item === false).length;
};
