/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function (s, queries) {
  const candles = []; // 蜡烛下标集合
  for (let i in s) {
    if (s[i] === "|") candles.push(~~i);
  }
  const result = new Array(queries.length).fill(0);
  for (let index in queries) {
    const [x, y] = queries[index];
    if (y - x === 1) {
      result[index] = 0;
      continue;
    }
    const left = getLeftBorder(candles, x);
    const right = getRightBorder(candles, y);
    if (left >= right) {
      result[index] = 0;
      continue;
    }
    const nums = candles[right] - candles[left] + 1 - (right - left + 1);
    result[index] = nums;
  }

  return result;
};

// 获取第一个大于等于目标值的下标
const getLeftBorder = (arr, num) => {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (arr[mid] >= num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

// 获取第一个小于等于目标值的下标
const getRightBorder = (arr, num) => {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (arr[mid] <= num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};
