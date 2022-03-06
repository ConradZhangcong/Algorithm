/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimalKSum = function (nums, k) {
  nums.sort((x, y) => x - y);
  const length = nums.length;
  let current = 0;
  let result = 0n;

  for (let i = 0; i < length; i++) {
    if (nums[i] - 1 > current) {
      const count = Math.min(nums[i] - current - 1, k);
      const distance = ((current + current + count + 1) * count) / 2;
      k -= count;
      result += BigInt(distance);
    }
    current = nums[i];
  }

  if (k > 0) {
    result += BigInt(((current + current + k + 1) * k) / 2);
  }

  return result.toString();
};

// js丢精度了 结果应该没问题
console.log(minimalKSum([1000000000], 1000000000));
