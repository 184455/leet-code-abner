/**
 * 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

 

示例 1：

输入：n = 2
输出：1
示例 2：

输入：n = 5
输出：5
 

提示：

0 <= n <= 100
通过次数175,975提交次数511,080


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number} n
 * @return {number}
 */
// 递归的方式已经能够得到答案了，但是性能特别差！
var fib = function(n) {
  let count = 0
  const fibonacci = (n) => {
    count++
    if (n === 1) {
      return 1
    }
    if (n === 0) {
      return 0
    }

    return fibonacci(n - 1) + fibonacci(n - 2)
  }

  const res = fibonacci(n)
  console.log(count); // 43 的数列就要递归 14 亿次，相当可怕的递归调用栈
  return res
};

// 动态规划-滚动数组 解法
var fib = function (n) {
  if (n === 0) { return 0 }
  if (n === 1) { return 1 }

  let n0 = 0, n1 = 1, temp
  for (let i = 2; i <= n; i++) {
    temp = n1 // 记录上一项 n - 1 的值
    n1 = (n0 + n1) % 1000000007 // 推到下一项的值
    n0 = temp // 前进一步
  }

  return n1
}

const n = 8
console.log(fib(n));
