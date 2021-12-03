/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((x, y) => x - y);
  let sum = 0;
  let smallest = nums[0];
  let reverseTime = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i < k && nums[i] <= 0) {
      nums[i] = -nums[i];
      reverseTime++;
    }
    if (smallest !== 0 && Math.abs(nums[i]) < Math.abs(smallest)) {
      smallest = Math.abs(nums[i]);
    }
    sum += nums[i];
  }

  if (k - reverseTime > 0) {
    (k - reverseTime) % 2 === 0 ? sum : (sum -= Math.abs(smallest) * 2);
  }

  return sum;
};

console.log(largestSumAfterKNegations([8, -7, -3, -9, 1, 9, -6, -9, 3], 8));
