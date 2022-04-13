/**
 * 380. O(1) 时间插入、删除和获取随机元素
 * https://leetcode-cn.com/problems/insert-delete-getrandom-o1/
 */
var RandomizedSet = function () {
  this.list = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  const index = this.list.findIndex((item) => item === val);
  if (index > -1) {
    return false;
  } else {
    this.list.push(val);
    return true;
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  const index = this.list.findIndex((item) => item === val);
  if (index > -1) {
    this.list.splice(index, 1);
    return true;
  } else {
    return false;
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const length = this.list.length;
  const index = ~~(Math.random() * length);
  return this.list[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
