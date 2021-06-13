/**
 * 给定一个整数数组，找出总和最大的连续数列，并返回总和。

示例：

输入： [-2,1,-3,4,-1,2,1,-5,4]
输出： 6
解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。
进阶：

如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/contiguous-sequence-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 分治法
var maxSubArray = function(nums) {
  const crossMaxSubArray = (arr, low, mid, height) => {
    let sum = 0

    // mid => low
    let crossLeftMax = -Infinity
    let crossLeftIndex = -1
    for (let i = mid; i >= low; i--) {
      sum += arr[i]
      if (sum > crossLeftMax) {
        crossLeftMax = sum
        crossLeftIndex = i
      }
    }

    // mid => height
    sum = 0
    let crossRightMax = -Infinity
    let crossRightIndex = -1
    for (let i = mid + 1; i <= height; i++) {
      sum += arr[i]
      if (sum > crossRightMax) {
        crossRightMax = sum
        crossRightIndex = i
      }
    }

    return [crossLeftIndex, crossRightIndex, crossLeftMax + crossRightMax]
  }
  const findMaxSubArray = (arr, low, height) => {
    if (low === height) {
      return [low, height, arr[low]]
    }

    const mid = Math.floor((low + height) / 2)
    const [leftLow, leftHeight, leftMax] = findMaxSubArray(arr, low, mid)
    const [rightLow, rightHeight, rightMax] = findMaxSubArray(arr, mid + 1, height)
    const [crossLow, crossHeight, crossMax] = crossMaxSubArray(arr, low, mid, height)

    if (leftMax >= rightMax && leftMax >= crossMax) {
      return [leftLow, leftHeight, leftMax]
    } else if (rightMax >= leftMax && rightMax >= crossMax) {
      return [rightLow, rightHeight, rightMax]
    } else {
      return [crossLow, crossHeight, crossMax]
    }
  }

  const res = findMaxSubArray(nums, 0, nums.length - 1)
  return res[2]
};

//贪心算法
var maxSubArray = function(nums) {
  let currentSum = 0, maxSum = nums[0]
  nums.forEach(item => {
    currentSum = Math.max(currentSum + item, item)
    maxSum = Math.max(currentSum, maxSum)
  })

  return maxSum
}

// 动态规划
// 其实动态规划的核心判断逻辑和贪心算法的是一样的。
// 只是动态规划需要填一个数组
var maxSubArray = function(nums) {
  let maxSum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    // 这两个判断条件是一样的结果
    if (nums[i - 1] > 0) {
    // if (nums[i - 1] + nums[i] > nums[i]) {
      nums[i] = nums[i - 1] + nums[i]
    }
    maxSum = Math.max(nums[i], maxSum)
  }

  return maxSum
}

const nums = [-2,-1]
// const nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums));
