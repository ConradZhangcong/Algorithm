/**
 * @param {string} dominoes
 * @return {string}
 */

const pushDominoes = (dominoes) => {
  const length = dominoes.length;
  const result = dominoes.split("");

  let left = 0,
    right = 0;

  while (right < length) {
    if (result[right] !== ".") {
      if (result[left] === "R" && result[right] === "L") {
        // 往中间倒
        let temp = 1;
        while (left + temp < right - temp) {
          result[left + temp] = "R";
          result[right - temp] = "L";
          temp++;
        }
      } else if (result[left] === "R" && result[right] === "R") {
        // 右边为R
        let temp = 0;
        while (left + temp <= right) {
          result[left + temp] = "R";
          temp++;
        }
      } else if (result[left] !== "R" && result[right] === "L") {
        // 左边全部为L
        let temp = 0;
        while (left + temp < right) {
          result[left + temp] = "L";
          temp++;
        }
      }
      left = right;
    } else {
      if (
        right === length - 1 &&
        result[left] === "R" &&
        result[right] === "."
      ) {
        // 右边全部为R
        let temp = 0;
        while (left + temp <= right) {
          result[left + temp] = "R";
          temp++;
        }
      }
    }
    right++;
  }

  return result.join("");
};
