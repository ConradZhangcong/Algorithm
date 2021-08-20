/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const length = s.length;
  if (length === 1) return s;
  if (k === 1) return s;

  const arr = Array.from(s);

  for (let i = 0; i < length; i += k * 2) {
    reverseArr(arr, i, Math.min(i + k, length) - 1);
  }

  return arr.join("");
};

const reverseArr = (arr, left, right) => {
  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
};
