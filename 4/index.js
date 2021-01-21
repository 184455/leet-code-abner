/**
 * 问题没有这么简单
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  function getArrMiddleVal (arr) {
    const arrLen = arr.length
    if (arrLen < 2) return arr[0] || 0
    if (arrLen % 2 === 0) {
      // 偶数
      return (arr[arrLen / 2] + arr[(arrLen / 2) - 1]) / 2
    }
    return arr[arrLen / 2]
  }
  const middle2 = getArrMiddleVal(nums2)
  if (!nums1.length) return middle2
  const middle1 = getArrMiddleVal(nums1)
  if (!nums2.length) return middle1
  console.log(middle1)
  console.log(middle2)
  return (middle1 + middle2) / 2
};

// 需要理解中位数在统计学中的作用：将集合分割成两个长度相等的集合；并且一个集合中的元素总比另外一个的大
var findMedianSortedArrays1 = function(nums1, nums2) {
  function getArrMiddleVal (arr) {
    const arrLen = arr.length
    if (arrLen < 2) return arr[0] || 0
    if (arrLen % 2 === 0) {
      // 偶数
      return (arr[arrLen / 2] + arr[(arrLen / 2) - 1]) / 2
    }
    return arr[arrLen / 2]
  }
  function compareThreeNumber(a, b, flagNumber) {}
  // 处理其中一个数组为空的情况

  const res1 = getArrMiddleVal(nums1)
  const res2 = getArrMiddleVal(nums2)
  if (res1.length === 1 && res2.length === 1) {
    // 奇奇
    return (res1[0] + res2[0]) / 2
  } else if (res1.length === 2 && res2.length === 2) {
    // 偶偶
  } else {
    // 奇偶
  }
};

const nums1 = [3]
const nums2 = [-2, -1]
console.log(findMedianSortedArrays1(nums1, nums2))
