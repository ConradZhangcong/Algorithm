/**
 * 905. 按奇偶排序数组
 * https://leetcode-cn.com/problems/sort-array-by-parity/
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const length = nums.length;
  if (length === 1) return nums;

  let current = 0;
  for (let i = 0; i < length; i++) {
    if ((nums[i] & 1) === 0) {
      [nums[current], nums[i]] = [nums[i], nums[current]];
      current++;
    }
  }

  return nums;
};
