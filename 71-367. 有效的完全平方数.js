/**
 * 给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。

进阶：不要 使用任何内置的库函数，如  sqrt 。

 

示例 1：

输入：num = 16
输出：true
示例 2：

输入：num = 14
输出：false
 

提示：

1 <= num <= 2^31 - 1
通过次数69,716提交次数159,007

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-perfect-square
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  const s = String(num)
  if ([0, 1, 4, 5, 6, 9].indexOf(Number(s[s.length - 1])) === -1) {
    // 完全平方数一定以这几个数结尾
    return false
  }

  let left = 1, right = num
  let mid, guess
  while (left <= right) {
    mid = Math.floor(((left + right) / 2))
    guess = mid * mid
    if (guess === num) {
      return true
    } else if (guess > num) {
      right = mid - 1
    } else if (guess < num) {
      left = mid + 1
    }
  }

  return false
};

const num = 15
console.log(isPerfectSquare(num));

// 这个题目主要是考察数学只是，其次才是二分查找
