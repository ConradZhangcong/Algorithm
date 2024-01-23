/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function (nums) {
  if (nums.length === 2 && nums[1] - nums[0] === 1) return 2;

  let result = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] !== 1) continue;

    let res = 2;
    for (let j = i + 2; j < nums.length; j++) {
      if (nums[j] === nums[j - 2]) {
        res++;
      } else {
        result = Math.max(result, res);
        break;
      }
    }
    result = Math.max(result, res);
  }

  return result;
};

console.log(alternatingSubarray([14, 30, 29, 49, 3, 23, 44, 21, 26, 52]));
