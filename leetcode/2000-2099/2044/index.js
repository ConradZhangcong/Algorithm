/**
 * 2044. 统计按位或能得到最大值的子集数目
 * https://leetcode-cn.com/problems/count-number-of-maximum-bitwise-or-subsets/
 * 二进制枚举
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
  let max = 0,
    result = 0;

  // 循环 2^n - 1次
  for (let i = 0; i < 1 << nums.length; i++) {
    let val = 0;
    for (let j = 0; j < nums.length; j++) {
      if (((i >> j) & 1) === 1) {
        val |= nums[j];
      }
    }
    if (val > max) {
      max = val;
      result = 1;
    } else if (val === max) {
      result++;
    }
  }

  return result;
};
