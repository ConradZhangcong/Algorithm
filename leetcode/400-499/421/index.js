/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaximumXOR = (nums) => {
  const reuslt = []
  let res = 0;
  for (let i = 0; i < nums.length; i++) {

    for (let j = i + 1; j < nums.length; j++) {
      // res = Math.max(nums[i] ^ nums[j], res)
      reuslt.push(nums[i] ^ nums[j])
    }
  }

  return reuslt
};
