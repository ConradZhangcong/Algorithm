/**
 * 1823. 找出游戏的获胜者
 * https://leetcode-cn.com/problems/find-the-winner-of-the-circular-game/
 * 模拟
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  const queue = [];
  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }
  while (queue.length > 1) {
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
  }
  return queue[0];
};
