/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

 

示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
示例 2：

输入：nums = [1]
输出：1
示例 3：

输入：nums = [0]
输出：0
示例 4：

输入：nums = [-1]
输出：-1
示例 5：

输入：nums = [-100000]
输出：-100000
 

提示：

1 <= nums.length <= 3 * 104
-105 <= nums[i] <= 105
 

进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-subarray
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 分治法
var maxSubArray = function(nums) {
  const findMaxCrossingSubarray = (arr, low, mid, height) => {
    // 寻找左边最大子数组，mid -> low
    let leftMaxIndex = -1
    let leftMax = -Infinity
    let sum = 0
    for (let i = mid; i >= low; i--) {
      sum += arr[i]
      if (sum > leftMax) {
        leftMax = sum
        leftMaxIndex = i
      }
    }

    // 寻找右边最大子数组，mid -> height
    let rightMaxIndex = -1
    let rightMax = -Infinity
    sum = 0
    for (let j = mid + 1; j <= height; j++) {
      sum += arr[j]
      if (sum > rightMax) {
        rightMax = sum
        rightMaxIndex = j
      }
    }

    return [leftMaxIndex, rightMaxIndex, leftMax + rightMax]
  }
  const findMaximumSubarray = (arr, low, height) => {
    if (low === height) {
      return [low, height, arr[low]]
    }

    const mid = Math.floor((low + height) / 2)
    const [leftLow, leftHeight, leftSum] = findMaximumSubarray(arr, low, mid)
    const [rightLow, rightHeight, rightSum] = findMaximumSubarray(arr, mid + 1, height)
    const [crossLow, crossHeight, crossSum] = findMaxCrossingSubarray(arr, low, mid, height)

    if (leftSum >= rightSum && leftSum >= crossSum) {
      return [leftLow, leftHeight, leftSum]
    } else if (rightSum >= leftSum && rightSum >= crossSum) {
      return [rightLow, rightHeight, rightSum]
    } else {
      return [crossLow, crossHeight, crossSum]
    }
  }

  const res = findMaximumSubarray(nums, 0, nums.length - 1)
  return res[2]
};

// 贪心算法
var maxSubArray = function(nums) {
  let pre = 0, maxAns = nums[0], start = 0, end;
  nums.forEach((x, index) => {
    pre = Math.max(pre + x, x);
    maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
};

// const nums = [-1,-2]
const nums = [-1,-1,-2,-2]
// const nums = [-2, 1, -3, 4, -1, 2 , 1, -5, 4, -1]
console.log(maxSubArray(nums));
