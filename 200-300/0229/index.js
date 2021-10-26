/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const length = nums.length;

  const map = {};

  for (let i = 0; i < length; i++) {
    map[nums[i]] ? (map[nums[i]] = map[nums[i]] + 1) : (map[nums[i]] = 1);
  }

  const reuslt = [];
  for (let i in map) {
    if (map[i] * 3 > length) {
      reuslt.push(i);
    }
  }

  return reuslt;
};
