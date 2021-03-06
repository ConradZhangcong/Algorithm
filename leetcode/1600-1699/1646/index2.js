/**
 * @desc 打表
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  const arr = [
    0, 1, 1, 2, 1, 3, 2, 3, 1, 4, 3, 5, 2, 5, 3, 4, 1, 5, 4, 7, 3, 8, 5, 7, 2,
    7, 5, 8, 3, 7, 4, 5, 1, 6, 5, 9, 4, 11, 7, 10, 3, 11, 8, 13, 5, 12, 7, 9, 2,
    9, 7, 12, 5, 13, 8, 11, 3, 10, 7, 11, 4, 9, 5, 6, 1, 7, 6, 11, 5, 14, 9, 13,
    4, 15, 11, 18, 7, 17, 10, 13, 3, 14, 11, 19, 8, 21, 13, 18, 5, 17, 12, 19,
    7, 16, 9, 11, 2, 11, 9, 16, 7,
  ];

  return getMax(arr, n);
};

const getMax = (arrs, n) => {
  let current = 0;
  let max = 0;
  while (current <= n) {
    if (arrs[current] > max) {
      max = arrs[current];
    }
    current++;
  }

  return max;
};
