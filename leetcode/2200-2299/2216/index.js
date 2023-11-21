/**
 * @param {number[]} nums
 * @return {number}
 */
const minDeletion = (nums) => {
  const length = nums.length;
  let i = 0;
  let res = 0;

  while (i < length - 1) {
    if (nums[i] === nums[i + 1]) {
      if (i % 2 === res % 2) {
        res++;
      }
    }

    i++;
  }

  if ((length - res) % 2 === 1) {
    res++;
  }

  return res;
};
