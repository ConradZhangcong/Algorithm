/**
 * @param {number[]} distance
 * @return {boolean}
 */
var isSelfCrossing = function (distance) {
  const [a, b, c, d] = distance;
  if (a >= c && b <= d) {
    return true;
  }
  return false;
};

console.log(isSelfCrossing([1, 1, 1, 1]));
