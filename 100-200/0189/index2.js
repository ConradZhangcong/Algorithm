/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const length = nums.length;
  const result = new Array(length);
  for (let i = 0; i < length; i++) {
    result[(k + i) % length] = nums[i];
  }
  for (let i = 0; i < length; i++) {
    nums[i] = result[i];
  }
};
