/**
 * 954. 二倍数对数组
 * https://leetcode-cn.com/problems/array-of-doubled-pairs/
 * 哈希表
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function (arr) {
  const cnt = new Map();
  for (const x of arr) {
    cnt.set(x, (cnt.get(x) || 0) + 1);
  }
  if ((cnt.get(0) || 0) % 2 !== 0) {
    return false;
  }

  const vals = [];
  for (const x of cnt.keys()) {
    vals.push(x);
  }
  vals.sort((a, b) => Math.abs(a) - Math.abs(b));

  for (const x of vals) {
    if ((cnt.get(2 * x) || 0) < cnt.get(x)) {
      // 无法找到足够的 2x 与 x 配对
      return false;
    }
    cnt.set(2 * x, (cnt.get(2 * x) || 0) - cnt.get(x));
  }
  return true;
};

console.log(canReorderDoubled([1, 2, 3, 4, 6, 7, 8, 14]));
console.log(canReorderDoubled([-6, -4, -3, -2, 1, 2, 3, 4, 6, 8]));
console.log(canReorderDoubled([2, 4, 0, 0, 8, 1]));
