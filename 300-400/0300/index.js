/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const arr = [nums[i]];

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        arr.push(nums[j]);
      }
    }

    if (arr.length > result.length) {
      result = arr;
    }
  }

  return result;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
