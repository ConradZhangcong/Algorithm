var SmallestInfiniteSet = function () {
  this.set = new Set();
  this.min = 1;
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  while (this.set.has(this.min)) this.min++;
  this.set.add(this.min);
  return this.min++;
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  if (this.set.has(num)) {
    this.set.delete(num);
    this.min = Math.min(this.min, num);
  }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
const obj = new SmallestInfiniteSet();
obj.addBack(2);
obj.popSmallest();
obj.popSmallest();
obj.popSmallest();
obj.addBack(1);
obj.popSmallest();
obj.popSmallest();
obj.popSmallest();
