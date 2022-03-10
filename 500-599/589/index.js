/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  const result = [];

  deep(root, result);

  return result;
};

const deep = (node, result) => {
  if (!node) return;
  if (node.val === null) return;
  result.push(node.val);
  if (!node.children) return;
  for (let child of node.children) {
    deep(child, result);
  }
};
