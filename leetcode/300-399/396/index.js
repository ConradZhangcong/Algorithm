/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
  const length = nums.length;
  if (length === 1) return 0;

  let currentCount = 0,
    ans = 0,
    index = length - 1,
    sum = 0;
  for (let i = 0; i < length; i++) {
    ans += nums[i] * i;
    currentCount = ans;
    sum += nums[i];
  }

  for (let i = 1; i <= index; i++) {
    currentCount = currentCount + sum - length * nums[length - i];
    if (currentCount > ans) {
      ans = currentCount;
    }
  }

  return ans;
};

console.log(maxRotateFunction([4, 3, 2, 6]));
