/**
 * 646. 最长数对链
 * https://leetcode.cn/problems/maximum-length-of-pair-chain/
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  const numArr = [];

  for (let [x, y] of pairs) {
    if (numArr[x]) {
      numArr[x].add(y);
    } else {
      numArr[x] = new Set([y]);
    }
  }

    

};
