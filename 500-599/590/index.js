/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  const result = [];
  loop(root, result);
  return result;
};

const loop = (node, result) => {
  if (!node || node.val === null) return;
  for (let n of node.children) {
    loop(n, result);
  }
  result.push(node.val);
};
