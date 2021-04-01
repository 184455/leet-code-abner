/**
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。



在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
通过次数160,115提交次数227,511

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/pascals-triangle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const res = []
  let i, j
  for (i = 0; i < numRows; i++) {
    for (j = 0; j <= i; j++) {
      if (j === 0) {
        res.push([1])
      } else if (j === i) {
        res[i].push(1)
      } else {
        res[i].push(res[i - 1][j - 1] + res[i - 1][j])
      }
    }
  }

  return res
};

const numRows = 6
console.log(generate(numRows));

// 可以写的更简洁
var generate1 = function(numRows) {
  const res = []
  let i, j
  for (i = 0; i < numRows; i++) {
    res[i] = (new Array(i + 1).fill(1))
    for (j = 1; j <= i - 1; j++) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j]
    }
  }

  return res
};
