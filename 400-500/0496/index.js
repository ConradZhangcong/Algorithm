const nextGreaterElement = (nums1, nums2) => {
  const m = nums1.length;
  const n = nums2.length;
  for (let i = 0; i < m; i++) {
    let j = 0;
    while (j < n && nums1[i] !== nums2[j]) {
      j++;
    }

    let k = j + 1;
    while (k < n && nums1[i] > nums2[k]) {
      k++;
    }
    nums1[i] = k < n ? nums2[k] : -1;
  }

  return nums1;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
