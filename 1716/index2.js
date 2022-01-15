/**
 * 数学找规律
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  const weekCount = parseInt(n / 7); // 周数
  const dayCount = n % 7; // 剩余天数
  const oneWeekMoney = ((1 + 7) * 7) / 2; // 每周能存的钱

  // 除了最后一周存的钱
  const berforeWeekMoney =
    oneWeekMoney * weekCount + // 每周固定存的钱28*周数
    ((7 + (weekCount - 1) * 7) * (weekCount - 1)) / 2; // 每一周额外多存的7*weekCount
  // // 最后一周存的钱
  const lastWeekMoney = ((weekCount + 1 + weekCount + dayCount) * dayCount) / 2;

  const result = berforeWeekMoney + lastWeekMoney;

  return result;
};
