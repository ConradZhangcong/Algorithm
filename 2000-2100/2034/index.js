var StockPrice = function () {
  this.data = new Map();
  this.currentTime = 0;
  this.currentPrice = 0;
};

/**
 * @param {number} timestamp
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function (timestamp, price) {
  this.data.set(timestamp, price);
  if (timestamp >= this.currentTime) {
    this.currentTime = timestamp;
    this.currentPrice = price;
  }
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function () {
  return this.currentPrice;
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function () {
  let max = 0;
  for (let p of this.data.values()) {
    if (p > max) max = p;
  }
  return max;
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function () {
  let min = Number.MAX_VALUE;
  for (let p of this.data.values()) {
    if (p < min) min = p;
  }
  return min;
};

/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */
