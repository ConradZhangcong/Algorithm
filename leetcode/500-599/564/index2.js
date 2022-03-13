/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function (n) {
  let index = 1n;
  let current = BigInt(n);
  while (current - index >= 0n) {
    if (isPalindromic((current - index).toString())) {
      return (current - index).toString();
    }
    if (isPalindromic((current + index).toString())) {
      return (current + index).toString();
    }
    index++;
  }
};

const isPalindromic = (s) => {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
      continue;
    } else {
      return false;
    }
  }
  return true;
};
