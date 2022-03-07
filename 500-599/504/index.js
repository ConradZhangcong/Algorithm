/**
 * @param {number} num
 * @return {string}
 */
 var convertToBase7 = function (num) {
  if (num === 0) return "0";
  let result = "";
  let sign = num < 0; // 是否为负数
  let noSignNum = Math.abs(num);
  while (noSignNum > 0) {
    result = (noSignNum % 7).toString() + result;
    noSignNum = Math.floor(noSignNum / 7);
  }
  return `${sign ? "-" : ""}${result}`;
};
