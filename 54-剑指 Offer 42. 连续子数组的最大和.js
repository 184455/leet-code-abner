/**
 * 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为O(n)。

 

示例1:

输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 

提示：

1 <= arr.length <= 10^5
-100 <= arr[i] <= 100

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const crossMaxSubArray = (arr, low, mid, height) => {
    let sum = 0;

    // 寻找 mid 左边的最大值
    let leftLow = -1
    let leftMaxSum = -Infinity
    for (let i = mid; i >= low; i--) {
      sum += arr[i]
      if (sum > leftMaxSum) {
        leftMaxSum = sum
        leftLow = i
      }
    }

    // 寻找 mid 右边的最大值
    sum = 0
    let rightHeight = -1
    let rightMaxSum = -Infinity
    for (let i = mid + 1; i <= height; i++) {
      sum += arr[i]
      if (sum > rightMaxSum) {
        rightMaxSum = sum
        rightHeight = i
      }
    }

    return [leftLow, rightHeight, leftMaxSum + rightMaxSum]
  }

  const findMaxSubArray = (arr, low, height) => {
    if (low === height) {
      return [low, height, arr[low]]
    }

    // 分解
    const mid = Math.floor((low + height) / 2)
    const [leftLow, leftHeight, leftMax] = findMaxSubArray(arr, low, mid) // 值全部在左边
    const [rightLow, rightHeight, rightMax] = findMaxSubArray(arr, mid + 1, height) // 值全部在在右边
    const [crossLow, crossHeight, crossMax] = crossMaxSubArray(arr, low, mid, height) // 值跨越了中间节点

    // 合并
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

// const nums = [-1,-2]
const nums = [-2,1,-3,4,-1,2,1,-5]
console.log(maxSubArray(nums));
