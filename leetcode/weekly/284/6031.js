/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
  const length = nums.length;

  const keyIndex = [];
  for (let i = 0; i < length; i++) {
    if (nums[i] === key) {
      keyIndex.push(i);
    }
  }

  const set = new Set();
  for (let i = 0; i < keyIndex.length; i++) {
    let index = -k;
    while (index <= k) {
      const current = keyIndex[i] + index;
      if (current > 0 && current < length) {
        set.add(current);
      }
      index++;
    }
  }

  const result = [...set];
  return result;
};
