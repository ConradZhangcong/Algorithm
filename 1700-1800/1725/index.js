/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  let maxLength = 0;
  let result = 0;
  for (let i of rectangles) {
    const length = Math.min(i[0], i[1]);
    if (maxLength === length) {
      result++;
    } else if (length > maxLength) {
      result = 1;
      maxLength = length;
    }
  }
  return result;
};
