/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  const length = nums.length;
  if (length === 1) return 0;
  let first = -1;
  let second = -1;
  let index = -1;

  for (let i = 0; i < length; i++) {
    if (nums[i] > first) {
      second = first;
      first = nums[i];
      index = i;
    } else if (nums[i] > second) {
      second = nums[i];
    }
  }

  return first >= second * 2 ? index : -1;
};

console.log(dominantIndex([1, 0]));
