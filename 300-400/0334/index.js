/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  const length = nums.length;
  if (length < 3) return false;

  const leftMin = new Array(length).fill(0);
  leftMin[0] = nums[0];
  for (let i = 1; i < length; i++) {
    leftMin[i] = Math.min(leftMin[i - 1], nums[i]);
  }

  const rightMax = new Array(length).fill(0);
  rightMax[length - 1] = nums[length - 1];
  for (let i = length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], nums[i]);
  }

  for (let i = 1; i < length - 1; i++) {
    if (nums[i] > leftMin[i - 1] && nums[i] < rightMax[i + 1]) {
      return true;
    }
  }

  return false;
};

increasingTriplet([2, 1, 5, 0, 4, 6]);
