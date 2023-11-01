/**
 * 449. 序列化和反序列化二叉搜索树
 * https://leetcode.cn/problems/serialize-and-deserialize-bst/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const arr = [];

  const loop = (node) => {
    if (!node && node !== 0) {
      loop(node.left);
      loop(node.right);
      arr.push(node.val);
    }
  };

  loop(root);

  return arr.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
