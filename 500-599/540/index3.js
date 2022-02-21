/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  for (let i = 0; nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
};
