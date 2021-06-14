/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

示例 1：

输入：n = 2
输出：2
示例 2：

输入：n = 7
输出：21
示例 3：

输入：n = 0
输出：1
提示：

0 <= n <= 100
注意：本题与主站 70 题相同：https://leetcode-cn.com/problems/climbing-stairs/



来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number} n
 * @return {number}
 */
// 其实这题也是 斐波那契 数组的规律，只要稍微做一点变形就能得到答案
var numWays = function(n) {
  if (n < 2) { return 1 }

  n++
  let n0 = 0, n1 = 1, temp
  for (let i = 2; i <= n; i++) {
    temp = n1
    n1 = (n0 + n1) % 1000000007
    n0 = temp
  }

  return n1
};

const n = 2
console.log(numWays(n));