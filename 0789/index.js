/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function (ghosts, target) {
  if (target === [0, 0]) return true;

  const dis = getDistance([0, 0], target);

  for (let i = 0; i < ghosts.length; i++) {
    if (getDistance(ghosts[i], target) <= dis) {
      return false;
    }
  }

  return true;
};

const getDistance = (start, end) => {
  return Math.abs(start[0] - end[0]) + Math.abs(start[1] - end[1]);
};
