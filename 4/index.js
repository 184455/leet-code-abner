/**
 * 寻找中位数
 * 中位数，在统计学上的意义：把一个集合分成两部分，一部分小于中位数，另外一部分大于中位数
 * 中位数的算法：按照大小的方式排列集合。
 * 如果集合的长度是奇数，中位数 = arr[length / 2]
 * 如果集合的长度是偶数，中位数 = (arr[(length / 2) - 1] + arr[length / 2]) / 2 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // 合并两个数组
  const mergeArrayRes = []
  let index1 = 0, index2 = 0
  let value1, value2
  while (nums1[index1] !== undefined || nums2[index2] !== undefined) {
    value1 = nums1[index1]
    value2 = nums2[index2]
    if (value1 !== undefined && value2 !== undefined) {
      if (value1 < value2) {
        mergeArrayRes.push(value1)
        index1++
      } else if (value2 < value1) {
        mergeArrayRes.push(value2)
        index2++
      } else {
        mergeArrayRes.push(value1, value2)
        index1++
        index2++
      }
    } else if (value1 !== undefined) {
      mergeArrayRes.push(value1)
      index1++
    } else {
      mergeArrayRes.push(value2)
      index2++
    }
  }

  // 寻找中位数
  const len = mergeArrayRes.length
  if (len % 2 === 0) {
    // 偶数
    return (mergeArrayRes[len / 2] + mergeArrayRes[(len / 2) - 1]) / 2
  } else {
    // 奇数
    const mid = Math.floor(len / 2)
    return mergeArrayRes[mid];
  }
};

const nums1 = []
const nums2 = [2,2,2]
// const nums1 = [3]
// const nums2 = [-2, -1]
console.log(findMedianSortedArrays(nums1, nums2))
