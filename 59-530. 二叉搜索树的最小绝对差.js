/**
 * 给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。

 

示例：

输入：

   1
    \
     3
    /
   2

输出：
1

解释：
最小绝对差为 1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。
 

提示：

树中至少有 2 个节点。
本题与 783 https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/ 相同


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 这里要充分利用【搜索二叉树】的性质
 const { buildBinaryTree } = require('./common')

/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  const forEachTree = (node, record) => {
    if (!node) {
      return record
    }

    forEachTree(node.left, record)
    record[0] = Math.min(record[0], node.val - record[1])
    record[1] = node.val
    forEachTree(node.right, record)
    return record
  }

  return forEachTree(root, [Infinity, -Infinity])[0]
};

// const root = buildBinaryTree([1,0,48,null,null,12,49])
// const root = buildBinaryTree([543,384,652,null,445,null,699])
const root = buildBinaryTree([4,2,6,1,3])
console.log(getMinimumDifference(root));
