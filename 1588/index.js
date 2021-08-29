/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    let brr = [];
    for (let j = i; j < arr.length; j++) {
      brr.push(arr[j]);

      if (brr.length % 2 === 1) {
        res += brr.reduce((a, b) => a + b);
      }
    }
  }

  return res;
};
