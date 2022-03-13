/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const map = {};

  for (let word of text) {
    map[word] ? map[word]++ : (map[word] = 1);
  }

  console.log(map);

  return Math.min(
    map.b || 0,
    map.a || 0,
    (map.l || 0) >> 1,
    (map.o || 0) >> 1,
    map.n || 0
  );
};

console.log(maxNumberOfBalloons("nlaebolko"));
