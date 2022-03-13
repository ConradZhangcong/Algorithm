const bsearch = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if ((nums[mid] = target)) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      if (nums[mid + 1] > value || mid === nums.length - 1) {
        return mid;
      } else {
        left = mid + 1;
      }
    }
  }

  return -1;
};

console.log(bsearch([3, 4, 6, 8, 9, 10], 7));

// target = 5
// l = 0, r = 4, mid = 2, nums[mid] = 6
//
