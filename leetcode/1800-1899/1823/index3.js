/**
 * 1823. 找出游戏的获胜者
 * https://leetcode-cn.com/problems/find-the-winner-of-the-circular-game/
 * 迭代
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  let winner = 1;
  for (let i = 2; i <= n; i++) {
    winner = ((k + winner - 1) % i) + 1;
  }
  return winner;
};
