/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const length = s.length;
  if (length <= 1) return s;

  let left = 0;
  let right = length - 1;
  const arr = Array.from(s);
  while (left < right) {
    // 左右都为元音字符 替换位置
    if (isVowel(arr[left]) && isVowel(arr[right])) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;

      left++;
      right--;
      continue;
    }
    // 左边不是元音字符
    if (!isVowel(arr[left])) left++;
    // 右边不是元音字符
    if (!isVowel(arr[right])) right--;
  }

  return arr.join("");
};

const isVowel = (w) =>
  w === "a" ||
  w === "A" ||
  w === "e" ||
  w === "E" ||
  w === "i" ||
  w === "I" ||
  w === "o" ||
  w === "O" ||
  w === "u" ||
  w === "U";

console.log(reverseVowels("hello"));
