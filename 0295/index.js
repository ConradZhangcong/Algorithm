/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.data = [];
  this.length = 0;
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.data.length === 0) {
    this.data.push(num);
    this.length++;
    return;
  }
  // 大于首项
  if (this.data[0] >= num) {
    this.data.unshift(num);
    this.length++;
    return;
  }
  // 小于尾项
  if (this.data[this.length - 1] <= num) {
    this.data.push(num);
    this.length++;
    return;
  }

  // 二分法查找插入的位置
  let [left, right] = [0, this.length - 1];
  let index = this.length;

  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (num <= this.data[mid]) {
      index = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  this.data.splice(index, 0, num);
  this.length++;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.length % 2 === 0) {
    const index = this.length / 2;
    return (this.data[index] + this.data[index - 1]) / 2;
  } else {
    const index = (this.length - 1) / 2;
    return this.data[index];
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

// var obj = new MedianFinder();
// obj.addNum(6);
// obj.addNum(10);
// obj.addNum(2);
// obj.addNum(6);
// obj.addNum(5);
// obj.addNum(0);
// console.log(obj, obj.findMedian());
// obj.addNum(6);
// console.log(obj, obj.findMedian());
// obj.addNum(3);
// console.log(obj, obj.findMedian());
// obj.addNum(1);
// console.log(obj, obj.findMedian());
// obj.addNum(0);
// console.log(obj, obj.findMedian());
// obj.addNum(0);
// console.log(obj, obj.findMedian());
