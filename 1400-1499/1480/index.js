/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sum = 0;
  let index = 0;

  while (index < nums.length) {
    sum += nums[index];
    nums[index] = sum;
    index++;
  }

  return nums;
};

console.log(runningSum([1,2,3,4]))
