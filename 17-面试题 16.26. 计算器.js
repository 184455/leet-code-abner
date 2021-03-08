/**
 * 给定一个包含正整数、加(+)、减(-)、乘(*)、除(/)的算数表达式(括号除外)，计算其结果。

表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格  。 整数除法仅保留整数部分。

示例 1:

输入: "3+2*2"
输出: 7
示例 2:

输入: " 3/2 "
输出: 1
示例 3:

输入: " 3+5 / 2 "
输出: 5
说明：

你可以假设所给定的表达式都是有效的。
请不要使用内置的库函数 eval。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/calculator-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  // 去除空格
  s = s.replace(/\s/g, '')

  // 负数开头
  if (s[0] === '-') {
    s = '0' + s
  }

  const operation = '+-*/'
  const parseRes = []
  let temp = ''

  // 解析字符串
  for (let char of s) {
   if (operation.indexOf(char) > -1) {
     parseRes.push(Number(temp))
     parseRes.push(char)
     temp = ''
   } else {
    temp += char
   }
  }

  if (temp) { parseRes.push(Number(temp)) }

  // 乘法，除法 计算
  const res1 = []
  let i = 0;
  while(i < parseRes.length) {
    if (parseRes[i] === '*') {
      res1.push(res1.pop() * parseRes[i + 1])
      i += 2
    } else if (parseRes[i] === '/') {
      res1.push((res1.pop() / parseRes[i + 1]) | 0)
      i += 2
    } else {
      res1.push(parseRes[i])
      i++
    }
  }

  // 加法，减法 计算
  i = 1
  let res2 = res1[0]
  while(i < res1.length) {
    if (res1[i] === '-') {
      res2 = res2 - res1[i + 1]
      i += 2
    } else if (res1[i] === '+') {
      res2 = res2 + res1[i + 1]
      i += 2
    } else {
      i++
    }
  }

  return parseInt(res2)
};

const s = "14/3*2"
console.log(calculate(s));
