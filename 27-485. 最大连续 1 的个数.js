/**
 * 给定一个二进制数组， 计算其中最大连续 1 的个数。

 

示例：

输入：[1,1,0,1,1,1]
输出：3
解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
 

提示：

输入的数组只包含 0 和 1 。
输入数组的长度是正整数，且不超过 10,000。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/max-consecutive-ones
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let i, j = -1, len = nums.length - 1, count = 0

  for (i = 0; i <= len; i++) {
    if (nums[i]) {
      if (j === -1) {
        j = i
      }
    } else {
      if (j > -1) {
        count = i - j > count ? i - j : count
      }
      j = -1
    }
  }

  if (j > -1) {
    return i - j > count ? i - j : count
  }
  return count
};

const nums = [1,1]
console.log(findMaxConsecutiveOnes(nums));
