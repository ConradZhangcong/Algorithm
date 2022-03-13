/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
  const n = nums.length;
  let result = 0;

  for (let i = 0; i < n; i++) {
    let minVal = Number.MAX_VALUE,
      maxVal = -Number.MAX_VALUE;

    for (let j = i; j < n; j++) {
      minVal = Math.min(nums[j], minVal);
      maxVal = Math.max(nums[j], maxVal);
      result += maxVal - minVal;
    }
  }

  return result;
};
