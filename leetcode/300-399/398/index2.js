/**
 * 398. 随机数索引
 * https://leetcode-cn.com/problems/random-pick-index/
 * 水塘抽样
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

Solution.prototype.pick = function (target) {
  let ans = 0;
  for (let i = 0, cnt = 0; i < this.nums.length; ++i) {
    if (this.nums[i] == target) {
      ++cnt; // 第 cnt 次遇到 target
      if (Math.floor(Math.random() * cnt) === 0) {
        ans = i;
      }
    }
  }
  return ans;
};
