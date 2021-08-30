/**
 * @param {number[]} w
 */
var Solution = function (w) {
  const length = w.length;
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum += w[i];
    w[i] = sum;
  }
  for (let i = 0; i < length; i++) {
    w[i] = w[i] / sum;
  }
  this.data = w;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const randomNum = Math.random();

  const binarySearch = (x) => {
    let low = 0,
      high = this.data.length - 1;
    while (low < high) {
      const mid = Math.floor((high - low) / 2) + low;
      if (this.data[mid] < x) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return low;
  };

  return binarySearch(randomNum);
};

// left=0 right=3 mid=1
// left=0 right=1 mid=0

// [0.25, 1]
// left=0 right=1 mid=0

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

// var obj = new Solution([3, 14, 1, 7]);
// console.log(obj.pickIndex());
// console.log(obj.pickIndex());
// console.log(obj.pickIndex());
// console.log(obj.pickIndex());
// console.log(obj.pickIndex());
