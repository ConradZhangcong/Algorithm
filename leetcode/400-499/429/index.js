/**
 * 429. N 叉树的层序遍历
 * https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  let queue = [root];
  const result = [];

  while (queue.length) {
    const newQueue = [];
    const level = [];
    for (let item of queue) {
      if (item) {
        level.push(item.val);
        newQueue.push(...item.children);
      }
    }
    queue = newQueue;
    result.push(level);
  }

  return result;
};
