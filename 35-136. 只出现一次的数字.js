/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4
通过次数381,743提交次数535,704

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/single-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const map = new Map()
  nums.forEach((i) => {
    if (!map.has(i)) {
      map.set(i, 1)
    } else {
      map.set(i, 2)
    }
  })

  for (let [key, val] of map.entries()) {
    if (val === 1) {
      return key
    }
  }

  return -1
};

var singleNumber = function(nums) {
  nums.sort()
  const len = nums.length - 1
  for (let i = 0; i < len; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i]
    }
  }

  return nums[len]
}

const nums = [1,0,1]
// const nums = [4,1,2,1,2]
console.log(singleNumber(nums));
