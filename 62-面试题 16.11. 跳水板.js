/**
 * 你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为shorter，长度较长的木板长度为longer。你必须正好使用k块木板。编写一个方法，生成跳水板所有可能的长度。

返回的长度需要从小到大排列。

示例 1

输入：
shorter = 1
longer = 2
k = 3
输出： [3,4,5,6]
解释：
可以使用 3 次 shorter，得到结果 3；使用 2 次 shorter 和 1 次 longer，得到结果 4 。以此类推，得到最终结果。
提示：

0 < shorter <= longer
0 <= k <= 100000
通过次数48,042提交次数109,037

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/diving-board-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
// 两个元素之和等于 K 值的排列组合，计算他们组合对应的两个长度！
// 这种方法依然有优化的空间。
// 应该认识到，当 shorter === longer 只有一个解法
// 还有一点很重的是：shorter * (k - i) + logger * i (0 <= i <= k) 是一个单调递增的函数
// 依据这两点，可以优化代码
var divingBoard = function(shorter, longer, k) {
  if (k === 0) { return [] }

  const res = []
  for (let i = 0; i <= k; i++) {
    res.push(i * shorter + (k - i) * longer)
    res.push(i * longer + (k - i) * shorter)
  }

  return ([...new Set(res)]).sort((a, b) => a - b)
};

// 优化过后的代码
var divingBoard = function(shorter, longer, k) {
  if (k === 0) { return [] }
  if (shorter === longer) { return [k * longer] }

  const res = []
  for (let i = 0; i <= k; i++) {
    res.push(shorter * (k - i) + longer * i)
  }

  return res
}

const shorter = 1, longer = 2, k = 3
console.log(divingBoard(shorter, longer, k));
