/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */

var findRadius = (houses, heaters) => {
  heaters.sort();
  let result = 0;

  for (let house of houses) {
    const i = findHeater(house, heaters);
    const j = i + 1;
    const leftDistance = i < 0 ? Number.MAX_VALUE : house - heaters[i];
    const rightDistance =
      j >= heaters.length ? Number.MAX_VALUE : heaters[j] - house;
    const curDistance = Math.min(leftDistance, rightDistance);
    result = Math.max(result, curDistance);
  }

  return result;
};

const findHeater = (house, heaters) => {
  let left = 0,
    right = heaters.length - 1;
  if (heaters[left] > house) {
    return -1;
  }
  while (left < right) {
    const mid = Math.floor((right - left + 1) / 2) + left;
    if (heaters[mid] > house) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  return left;
};
