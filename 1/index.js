/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @time 124 ms
 * @memory 34.9 MB
 */
var twoSum = function(nums, target) {
  let res = null
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        res = [i, j]
        break
      }
    }
    if (res) break
  }
  return res
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @time 252 ms
 * @memory 34.7 MB
 */
var twoSum1 = function(nums, target) {
  let res = null
  nums.some((val, index) => {
    const resIndex = nums.indexOf(target - val, index + 1)
    if (resIndex > -1) {
      res = [index, resIndex]
      return true
    }
    return false
  })
  return res
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @time 68 ms
 * @memory 35.4 MB
 */
var twoSum2 = function(nums, target) {
  let numMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    const delta = target - nums[i]
    if (numMap.has(delta)) {
      return [numMap.get(delta), i]
    }
    numMap.set(nums[i], i)
  }
};

// 双循环无可避免
// 但是可以利用哈希表来加速第二次循环，这是变快的关键

const nums = [2, 7, 11, 15]
const target = 9
console.log(twoSum2(nums, target))
