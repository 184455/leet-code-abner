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
      if (leftVal !== null && leftVal !== undefined) {
        item.left = _createNode(leftVal)
        temp.push(item.left)
      }
      const rightVal = valueArr.shift()
      if (rightVal !== null && rightVal !== undefined) {
        item.right = _createNode(rightVal)
        temp.push(item.right)
      }
    })
    return _buildBinaryTree(res, temp, valueArr, _createNode)
  }

  return _buildBinaryTree(res, [res], list.slice(1), createNode)
}

module.exports = { buildBinaryTree }
