/**
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

 

示例 1：

输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
示例 2：

输入：target = 4, nums = [1,4,4]
输出：1
示例 3：

输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0
 

提示：

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 105
 

进阶：

如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-size-subarray-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  if (nums[0] >= target) {
    return 1
  }

  let i = 0, j = -1, len = nums.length, sum = nums[0], res = Infinity
  while (i < len) {
    if (sum <= target) {
      // 小了，向前加一个，j 指针保持不动
      i++
      sum = sum + nums[i]
    } else {
      // 大了，j 指针向前移动一个位置，丢一个数，i 保持不动
      j++
      sum = sum - nums[j]
    }

    if (sum && sum >= target) {
      res = Math.min(res, i - j)
    }
  }

  return isFinite(res) ? res : 0
};

const target = 6, nums = [10,2,3]
// const target = 15, nums = [1,2,3,4,5]
// const target = 11, nums = [1,2,3,4,5]
// const target = 11, nums = [1,1,1,1,1,1,1,1]
// const target = 4, nums = [1,4]
// const target = 7, nums = [2,3,1,2,4,3]
console.log(minSubArrayLen(target, nums));
