/**
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

 

进阶：

尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？
 

示例 1:

输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]
示例 2:

输入：nums = [-1,-100,3,99], k = 2
输出：[3,99,-1,-100]
解释: 
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]
 

提示：

1 <= nums.length <= 2 * 104
-231 <= nums[i] <= 231 - 1
0 <= k <= 105


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/rotate-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // 这种算法是能够符合题意的，但是会引入新的内存，而且是内存的空间复杂度是（O2），不满足题意
  const len = nums.length - k
  nums = nums.slice(len).concat(nums.slice(0, len))
};

var rotate = function(nums, k) {
  // 这种算法也能得出正确答案，但是当数据的规模很大的时候会超时
  let temp
  while (k > 0) {
    temp = nums.pop()
    nums.unshift(temp)
    k--
  }

  return nums
};

var rotate = function(nums, k) {
  const len = nums.length
  if (k === 0 || len < 2) { return nums }

  // 辗转相除法，求最大公约数
  const getMaxDivisor = (a, b) => {
    if (a % b === 0) { return b }
    return getMaxDivisor(b, a % b)
  }

  const isEven = k > 1 && getMaxDivisor(len, k) > 1
  let i = 0, currentIndex = 0, prevVal = nums[0], nextVal
  if (isEven) {
    rotate(nums, 1)
    rotate(nums, k - 1)
  } else {
    while (i < len) {
      currentIndex = currentIndex + k
      if (currentIndex >= len) {
        currentIndex = currentIndex % len
      }
  
      nextVal = nums[currentIndex]
      nums[currentIndex] = prevVal
      prevVal = nextVal
  
      i++
    }
  }
};

// const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54], k = 45
// const nums = [1,2,3,4,5,6], k = 4
// const nums = [1,2,3,4,5,6], k = 3
// const nums = [-1], k = 2
// const nums = [1,2], k = 3
// const nums = [ 99, -1, -100, 3 ], k = 2
// const nums = [1,2,3,4], k = 2
const nums = [1,2,3,4,5,6,7], k = 2
rotate(nums, k)
console.log(nums);

// 其实这题有很多好的解法，比如：环形（这题的思路），翻转，借助额外空间，补位，...
