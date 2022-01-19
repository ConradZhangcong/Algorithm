/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  if (nums.length === 1) return false;

  for (let i = 0; i < nums.length; i++) {
    // 计算边界的最小值
    const min = Math.min(i + k + 1, nums.length);
    for (let j = i + 1; j < min; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }

  return false;
};
