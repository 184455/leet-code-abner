/**
 * 假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

给你一个整数数组  flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。另有一个数 n ，能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false。

 

示例 1：

输入：flowerbed = [1,0,0,0,1], n = 1
输出：true
示例 2：

输入：flowerbed = [1,0,0,0,1], n = 2
输出：false
 

提示：

1 <= flowerbed.length <= 2 * 104
flowerbed[i] 为 0 或 1
flowerbed 中不存在相邻的两朵花
0 <= n <= flowerbed.length
通过次数97,413提交次数290,120

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/can-place-flowers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  const len = flowerbed.length
  if (n === 0) { return true }
  if (len === 0) { return false }

  let count = 0
  for (let i = 0; i < len; i++) {
    // 当前盆空 并且 两边没有花，可以种下
    if (!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1]) {
      flowerbed[i] = 1
      count++
      if (count === n) { return true }
    }
  }

  return false
};

const flowerbed = [1,0,0,0,1], n = 2
// const flowerbed = [1,0,0,0,1], n = 4
// const flowerbed = [1,0,0,0,1], n = 0
// const flowerbed = [], n = 1
// const flowerbed = [1], n = 0
// const flowerbed = [0,0,1,0,1], n = 1
console.log(canPlaceFlowers(flowerbed, n));
console.log(flowerbed);
