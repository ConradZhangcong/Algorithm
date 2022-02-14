/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = (nums) => {
  const length = nums.length;
  if (length === 1) return nums[0];

  let left = 0;
  let right = length - 1;
  while (left < right) {
    const mid = ((left + ((right - left) >> 1)) >> 1) << 1;
    if (nums[mid] === nums[mid + 1]) {
      left = mid + 2;
    } else {
      right = mid;
    }
  }

  return nums[left];
};
