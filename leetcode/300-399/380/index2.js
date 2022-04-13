/**
 * 380. O(1) 时间插入、删除和获取随机元素
 * https://leetcode-cn.com/problems/insert-delete-getrandom-o1/
 * 官方题解: 变长数组 + 哈希表
 */
var RandomizedSet = function () {
  this.list = [];
  this.indices = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.indices.has(val)) {
    return false;
  }
  let index = this.list.length;
  this.list.push(val);
  this.indices.set(val, index);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.indices.has(val)) {
    return false;
  }
  // 获取需要删除的节点的下标
  let index = this.indices.get(val);
  // 将最后一个元素替换需要删除的元素
  this.list[index] = this.list[this.list.length - 1];
  this.indices.set(this.list[index], index);
  // 删除最后一个元素
  this.list.pop();
  this.indices.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const index = ~~(Math.random() * this.list.length);
  return this.list[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
