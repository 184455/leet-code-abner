/**
 * 给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。

 

示例:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

输出:  [1,2,4,7,5,3,6,8,9]

说明:

给定矩阵中的元素总数不会超过 100000 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/diagonal-traverse
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var findDiagonalOrder = function(matrix) {
  const row = matrix.length
  if (row === 0) return []
  if (row === 1) return matrix[0]

  const col = matrix[0].length
  if (col === 1) {
    return matrix.flat()
  }

  const res = [matrix[0][0]]
  const total = row + col
  let x, y, i, j, downFlag = true
  let down = 0, up = 0
  for (i = 1; i < total - 1; i++) {
    j = 0
    if (downFlag) { // 下降
      if (i <= col) {
        down = col === i ? 1 : 0 // 记录前一次数据
        x = down
        y = col === i ? col - 1 : i
      } else {
        down = col === i ? 1 : down + 2
        x = down
        y = col - 1
      }

      while (matrix[x + j] && matrix[x + j][y - j] !== undefined) {
        res.push(matrix[x + j][y - j])
        j++
      }
    } else { // 上升
      if (i <= row) {
        x = row === i ? row - 1 : i
        up = row === i ? 1 : 0
        y = up
      } else {
        x = row - 1
        up =  row === i ? 1 : up + 2
        y = up
      }

      while (matrix[x - j] && matrix[x - j][y + j] !== undefined) {
        res.push(matrix[x - j][y + j])
        j++
      }
    }

    downFlag = !downFlag
  }

  return res
};

// const matrix = [[3],[2]]
// const matrix = [
//   [1,2,6],
//   [3,4,5]
// ]
// const matrix = [
//   [ 1, 2 ],
//   [ 4, 5 ],
//   [ 7, 8 ]
//  ]
// const matrix = [
//   [ 1, 2, 3, 23, 25 ],
//   [ 4, 5, 6, 43, 53 ],
//   [ 7, 8, 9, 35, 12 ],
//   [ 7, 8, 9, 35, 12 ],
//   [ 7, 8, 9, 35, 12 ]
//  ]
//  const matrix = [
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ]
//  ]
// const matrix = [
//   [2,5],
//   [8,4],
//   [0,-1]
// ]
const matrix = [
  [ 1,  2,   3,  4 ],
  [ 5,  6,   7,  8 ],
  [ 9, 10,  11, 12 ],
  [ 13, 14, 15, 16 ],
  [ 17, 18, 19, 20 ],
  [ 21, 22, 23, 24 ],
 ]
console.log(findDiagonalOrder(matrix));

