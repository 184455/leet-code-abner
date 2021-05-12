/**
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 

示例 1：

输入：[3,2,3]
输出：3
示例 2：

输入：[2,2,1,1,1,2,2]
输出：2
 

进阶：

尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/majority-element
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 哈希统计法
var majorityElement = function(nums) {
  const count = {}

  // 统计
  nums.forEach(num => {
    if (count[num] !== undefined) {
      count[num] += 1 
    } else {
      count[num] = 0
    }
  })

  // 寻找最大
  let maxVal = -Infinity
  let maxKey = ''
  Object.keys(count).forEach(key => {
    if (count[key] > maxVal) {
      maxVal = count[key]
      maxKey = key
    }
  })

  return maxKey
};

// 分治法
var majorityElement = function(nums) {
  const countElements = (arr, low, height, target) => {
    let count = 0
    for (let i = low; i <= height; i++) {
      if (arr[i] === target) {
        count++
      }
    }

    return count
  }
  const getMajorityEle = (arr, low, height) => {
    if (low === height) {
      return arr[low]
    }

    // 递归分解问题
    const mid = Math.floor((low + height) / 2)
    const leftNum = getMajorityEle(arr, low, mid)
    const rightNum= getMajorityEle(arr, mid + 1, height)

    // 合并问题
    if (leftNum === rightNum) {
      return leftNum
    }

    const left = countElements(arr, low, height, leftNum)
    const right = countElements(arr, low, height, rightNum)
    return left > right ? leftNum : rightNum;
  }

  return getMajorityEle(nums, 0, nums.length - 1)
}

const nums = [4,4,3]
// const nums = [2,2,1,1,1,2,2]
console.log(majorityElement(nums));
