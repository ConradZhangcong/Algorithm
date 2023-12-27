/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  const length = nums.length;

  if (length === 1) return 0;

  for (let i = 0; i < length; i++) {
    if (i === 0) {
      if (nums[0] > nums[1]) {
        return i;
      }
    } else if (i === length - 1) {
      if (nums[length - 1] > nums[length - 2]) {
        return i;
      }
    } else {
      if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
        return i;
      }
    }
  }
};
