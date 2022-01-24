var StockPrice = function () {
  this.data = new Map();
  this.currentTime = 0;
  this.max = {
    key: 0,
    value: -Infinity,
  };
  this.min = {
    key: 0,
    value: Infinity,
  };
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
  }
  // 改变最大值
  if (price >= this.max.value) {
    this.max = { key: timestamp, value: price };
  } else if (timestamp === this.max.key) {
    this.max = { key: timestamp, value: price };
    for (let [key, value] of this.data.entries()) {
      if (value > this.max.value) {
        this.max = { key, value };
      }
    }
  }
  // 改变最小值
  if (price <= this.min.value) {
    this.min = { key: timestamp, value: price };
  } else if (timestamp === this.min.key) {
    this.min = { key: timestamp, value: price };
    for (let [key, value] of this.data.entries()) {
      if (value < this.min.value) {
        this.min = { key, value };
      }
    }
  }
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function () {
  return this.data.get(this.currentTime);
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function () {
  // console.log(this.data, this.maxTime);
  return this.max.value;
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function () {
  return this.min.value;
};

/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */
