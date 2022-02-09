/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  let result = 0;
  let n = nums.length;
  const map = new Map();

  for (let j = 0; j < n; j++) {
    result += (map.get(nums[j] - k) || 0) + (map.get(nums[j] + k) || 0);
    map.set(nums[j], (map.get(nums[j]) || 0) + 1);
  }

  return result;
};
