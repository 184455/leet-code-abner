/**
 * 给定一个整数 n，返回 n! 结果尾数中零的数量。

示例 1:

输入: 3
输出: 0
解释: 3! = 6, 尾数中没有零。
示例 2:

输入: 5
输出: 1
解释: 5! = 120, 尾数中有 1 个零.
说明: 你算法的时间复杂度应为 O(log n) 。

通过次数82,122提交次数189,103

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/factorial-trailing-zeroes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 5! = 1 * 2 * 3 * 4 * 5 = 120

/* 这题得发现规律：

1! = 1
5! = 120
10! = 3628800
15! = 1307674368000
20! = 2432902008176640000

所以看到没，这是一个规律题，其实位数的 0 是有规律的
只要是5的倍数就会出现0
*/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let count = 0;
  while (n > 1) {
    count += (n / 5) | 0;
    n = n / 5;
  }
  return count;
};

 console.log(trailingZeroes(25));

 const fib = n => {
   let sum = 1;
   for (let i = 1; i <= n; i++) {
     sum *= i
   }
   return sum
 }
