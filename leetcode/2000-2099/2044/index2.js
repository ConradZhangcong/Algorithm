/**
 * 2044. 统计按位或能得到最大值的子集数目
 * https://leetcode-cn.com/problems/count-number-of-maximum-bitwise-or-subsets/
 * 回溯/DFS
 * @param {number[]} nums
 * @return {number}
 */

var countMaxOrSubsets = function (nums) {
  this.nums = nums;
  this.maxOr = 0;
  this.cnt = 0;
  dfs(0, 0);
  return cnt;
};

const dfs = (pos, orVal) => {
  if (pos === nums.length) {
    if (orVal > maxOr) {
      maxOr = orVal;
      cnt = 1;
    } else if (orVal === maxOr) {
      cnt++;
    }
    return;
  }
  dfs(pos + 1, orVal | nums[pos]);
  dfs(pos + 1, orVal);
};
