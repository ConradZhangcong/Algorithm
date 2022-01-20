/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function (stones) {
  const cnts = new Array(3).fill(0);

  for (const stone of stones) {
    cnts[stone % 3]++;
  }

  return cnts[0] % 2 === 0
    ? !(cnts[1] === 0 || cnts[2] === 0)
    : !(Math.abs(cnts[1] - cnts[2]) <= 2);
};
