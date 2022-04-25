/**
 * 398. 随机数索引
 * https://leetcode-cn.com/problems/random-pick-index/
 * 哈希表
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.map = new Map();
  for (let i = 0; i < nums.length; i++) {
    this.map.get(nums[i])
      ? this.map.set(nums[i], [...this.map.get(nums[i]), i])
      : this.map.set(nums[i], [i]);
  }
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  const arr = this.map.get(target);
  return arr[~~(Math.random() * arr.length)];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
