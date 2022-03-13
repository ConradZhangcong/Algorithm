/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const length = nums.length;
  const last = nums[length - 1];
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] >= target) {
      if (nums[mid] > last) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else if (nums[mid] < target) {
      if (nums[mid] >= last) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      return mid;
    }
  }

  return -1;
};

console.log(search([1, 3], 3));
