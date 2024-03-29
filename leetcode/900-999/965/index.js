/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  if (!root) return true;

  if (root.left) {
    if (root.val !== root.left.val || !isUnivalTree(root.left)) {
      return false;
    }
  }

  if (root.right) {
    if (root.val !== root.right.val || !isUnivalTree(root.right)) {
      return false;
    }
  }

  return true;
};
