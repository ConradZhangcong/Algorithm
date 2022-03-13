var nextGreaterElement = function (nums1, nums2) {
  const map = new Map();
  const stack = [];

  for (let i = nums2.length - 1; i >= 0; i--) {
    const num = nums2[i];
    while (stack.length && stack[stack.length - 1] < num) {
      stack.pop();
    }
    map.set(num, stack.length ? stack[stack.length - 1] : -1);
    stack.push(num);
  }

  return new Array(nums1.length)
    .fill(0)
    .map((_, index) => map.get(nums1[index]));
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
