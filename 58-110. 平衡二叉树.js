/**
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 const { buildBinaryTree } = require('./common')
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  const forEachTree = (node) => {
    if (!node) {
      return 0
    }

    const left = forEachTree(node.left)
    const right = forEachTree(node.right)

    if (Math.abs(left - right) > 1) {
      return Infinity
    } else {
      return Math.max(left, right) + 1
    }
  }

  return isFinite(forEachTree(root))
};

const root = buildBinaryTree([1,2,2,3,3,null,null,4,4])
// const root = buildBinaryTree([3,9,20,null,null,15,7])
console.log(isBalanced(root));
