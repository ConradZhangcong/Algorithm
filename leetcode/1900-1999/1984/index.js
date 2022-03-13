/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  const length = nums.length;
  if (length === 1) return 0;

  nums.sort((x, y) => x - y);
  let min = Infinity;
  for (let i = 0; i < length - k + 1; i++) {
    const abs = nums[i + k - 1] - nums[i];
    if (abs < min) {
      min = abs;
    }
  }
  return min;
};

console.log(minimumDifference([9, 4, 1, 7], 2));
