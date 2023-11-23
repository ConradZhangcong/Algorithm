/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
function successfulPairs(spells, potions, success) {
  const result = new Array(spells.length).fill(0);
  const spellMap = new Map();

  for (let i = 0; i < spells.length; i++) {
    if (spellMap.has(spells[i])) {
      result[i] = result[spellMap.get(spells[i])];
      continue;
    } else {
      spellMap.set(spells[i], i);
    }
    for (let j = 0; j < potions.length; j++) {
      if (spells[i] * potions[j] >= success) {
        result[i]++;
      }
    }
  }

  return result;
}

console.log(successfulPairs(
  [20, 26, 38, 23, 23, 20, 14, 30],
  [24, 1, 7, 26, 19, 17, 7],
  510
));
