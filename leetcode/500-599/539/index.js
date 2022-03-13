/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  if (timePoints.length > 1440) return 0;

  const arr = [];
  for (let i = 0; i < timePoints.length; i++) {
    const timeTuple = timePoints[i].split(":");
    const time = timeTuple[0] * 60 + ~~timeTuple[1];
    arr.push(time);
  }
  arr.sort((x, y) => x - y);

  let min = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    diff =
      i === 0
        ? (diff = 1440 - (arr[arr.length - 1] - arr[0]))
        : arr[i] - arr[i - 1];
    if (diff === 0) {
      return 0;
    }

    if (min > diff) {
      min = diff;
    }
  }

  return min;
};
