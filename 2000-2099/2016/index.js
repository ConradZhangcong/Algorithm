/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let max = 0;

  const length = nums.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[j] - nums[i] > max) {
        max = nums[j] - nums[i];
      }
    }
  }

  return max === 0 ? -1 : max;
};
