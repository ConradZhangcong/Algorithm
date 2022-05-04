/**
 * 1823. 找出游戏的获胜者
 * https://leetcode-cn.com/problems/find-the-winner-of-the-circular-game/
 * 递归
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  if (n === 1) {
    return 1;
  }
  return ((k + findTheWinner(n - 1, k) - 1) % n) + 1;
};
