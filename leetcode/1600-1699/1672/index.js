/**
 * 1672. 最富有客户的资产总量
 * https://leetcode-cn.com/problems/richest-customer-wealth/
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    if (sum > max) max = sum;
  }
  return max;
};
