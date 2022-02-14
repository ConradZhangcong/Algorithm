/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let res = 0;
  for (let num of nums) {
    res ^= num;
  }
  return res;
};
