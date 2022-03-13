/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumTop = function (nums, k) {
  const length = nums.length;

  if (length === 1 && (k & 1) === 1) return -1;
  if (k === 1) return nums[1];

  let max = nums[0];

  const circleTime = k <= length ? k - 1 : length;

  for (let i = 1; i < circleTime; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return k >= length ? max : Math.max(max, nums[k]);
};
