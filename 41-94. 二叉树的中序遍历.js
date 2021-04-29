/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 先序遍历
const preTraversal = (root) => {
  const res = []
  const preOrder = (root) => {
    if (!root) { return }
    res.push(root.val)
    preOrder(root.left)
    preOrder(root.right)
  }

  preOrder(root)
  return res
}

 // 中序遍历
 const inTraversal = (root) => {
   const res = []
   const inOrder = (root) => {
     if (!root) { return }
     inOrder(root.left)
     res.push(root.val)
     inOrder(root.right)
   }

   inOrder(root)
   return res
 }

 // 后序遍历
 const afterTraversal = (root) => {
   const res = []
   const afterOrder = (root) => {
     if (!root) { return }
     afterOrder(root.left)
     afterOrder(root.right)
     res.push(root.val)
   }

   afterOrder(root)
   return res
 }