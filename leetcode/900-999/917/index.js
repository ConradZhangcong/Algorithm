/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const arr = s.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (!isLetter(arr[left])) {
      left++;
    }
    if (!isLetter(arr[right])) {
      right--;
    }
    if (isLetter(arr[left]) && isLetter(arr[right])) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  return arr.join("");
};

/** 是否为字母 */
const isLetter = (char) => {
  const charCode = char.charCodeAt();
  return (
    (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)
  );
};
