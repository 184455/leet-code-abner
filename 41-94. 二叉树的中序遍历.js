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
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
  const res = []
  const foreachTree = (node) => {
      if (!node) { return }
      foreachTree(node.left)
      res.push(node.val)
      foreachTree(node.right)
  }
  foreachTree(root)

  return res
};