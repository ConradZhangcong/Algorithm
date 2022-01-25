/**
 * @desc 根据n计算出完整的数组 从数组中获取最大值
 * @param {number} n
 * @return {number}
 */
 var getMaximumGenerated = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  const nums = [];
  nums[0] = 0;
  nums[1] = 1;

  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      nums[i] = nums[i / 2];
    } else {
      nums[i] = nums[(i - 1) / 2] + nums[(i + 1) / 2];
    }
  }

  return Math.max(...nums);
};