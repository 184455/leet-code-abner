/**
 * 给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。

不占用额外内存空间能否做到？

 

示例 1:

给定 matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
示例 2:

给定 matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
注意：本题与主站 48 题相同：https://leetcode-cn.com/problems/rotate-image/

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/rotate-matrix-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const len = matrix[0].length
  if (len < 2) {
    return matrix
  }

  let i = 0, temp, start, end, row, col
  const loopTimes = Math.floor(len / 2)
  for (let deep = 1; deep <= loopTimes; deep++) {
    start = deep
    end = len - 1 - deep
    row = deep - 1
    col = len - deep

    // top -> tight
    temp = matrix[row][col]
    matrix[row][col] = matrix[row][row]
    matrix[row][row] = temp
    for (i = start; i <= end; i++) {
      temp = matrix[row][i]
      matrix[row][i] = matrix[i][col]
      matrix[i][col] = temp
    }

    // right -> bottom
    temp = matrix[col][col]
    matrix[col][col] = matrix[row][row]
    matrix[row][row] = temp
    for (i = start; i <= end; i++) {
      temp = matrix[row][i]
      matrix[row][i] = matrix[col][len - 1 - i]
      matrix[col][len - 1 - i] = temp
    }

    // left - top
    temp = matrix[col][row]
    matrix[col][row] = matrix[row][row]
    matrix[row][row] = temp
    for (i = start; i <= end; i++) {
      temp = matrix[row][len - 1 - i]
      matrix[row][len - 1 - i] = matrix[i][row]
      matrix[i][row] = temp
    }
  }

  return matrix
};

// const matrix = [
//   [1,2,3,4],
//   [5,6,7,8],
//   [9,10,11,12],
//   [13,14,15,16],
// ]
// const matrix = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]
const matrix = [
  [1,2],
  [3,4]
]
console.log(rotate(matrix));
