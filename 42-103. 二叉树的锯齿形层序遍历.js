/**
 * 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回锯齿形层序遍历如下：

[
  [3],
  [20,9],
  [15,7]
]
通过次数135,178提交次数236,733


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal
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
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root || root.length < 1) { return [] }

  const levelOrder = (nodeList, res, order) => {
    if (nodeList.length < 1) { return res }

    const newNodeList = []
    const valList = []
    nodeList.forEach((node) => {
      valList[order](node.val)
      if (node.left) { newNodeList.push(node.left) }
      if (node.right) { newNodeList.push(node.right) }
    })

    return levelOrder(
      newNodeList.slice(),
      valList.length ? res.concat([valList]) : res,
      order === 'push' ? 'unshift' : 'push'
    )
  }

  return levelOrder([root], [], 'push')
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 创建二叉树 - 尾递归实现
 * @param {*} list 创建数据
 * @returns TreeNode
 */
const buildBinaryTree = (list) => {
  if (list.length < 1) return null

  const createNode = val => ({ val, left: null, right: null })
  const res = createNode(list[0] || null)
  const _buildBinaryTree = (res, nodes, valueArr, _createNode) => {
    if (valueArr.length < 1) { return res }

    const temp = []
    nodes.forEach((item) => {
      const leftVal = valueArr.shift()
      if (leftVal !== null) {
        item.left = _createNode(leftVal)
        temp.push(item.left)
      }
      const rightVal = valueArr.shift()
      if (rightVal !== null) {
        item.right = _createNode(rightVal)
        temp.push(item.right)
      }
    })
    return _buildBinaryTree(res, temp, valueArr, _createNode)
  }

  return _buildBinaryTree(res, [res], list.slice(1), createNode)
}

const root = buildBinaryTree([])
// const root = buildBinaryTree([3,9,20,null,null,15,7])
console.log(zigzagLevelOrder(root));
