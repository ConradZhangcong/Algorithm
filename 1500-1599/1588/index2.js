/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  // 前缀
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    arr[i] = sum;
  }

  arr.unshift(0);
  let res = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = i - 3; j >= 0; j -= 2) {
      res += arr[i] - arr[j];
    }
  }

  return res;
};
