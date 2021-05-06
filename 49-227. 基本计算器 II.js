/**
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

整数除法仅保留整数部分。

 

示例 1：

输入：s = "3+2*2"
输出：7
示例 2：

输入：s = " 3/2 "
输出：1
示例 3：

输入：s = " 3+5 / 2 "
输出：5
 

提示：

1 <= s.length <= 3 * 105
s 由整数和算符 ('+', '-', '*', '/') 组成，中间由一些空格隔开
s 表示一个 有效表达式
表达式中的所有整数都是非负整数，且在范围 [0, 231 - 1] 内
题目数据保证答案是一个 32-bit 整数


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/basic-calculator-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s = s.replace(' ', '')
  s = s + '+'
  const stack = []
  const operationStack = []
  let temp = '', operation = ''

  for (let c of s) {
    if (c === ' ' || !c) { continue }
    if (!isNaN(c)) {
      temp += c
    } else {
      operation = operationStack[operationStack.length - 1]
      if (operation === '/') {
        temp = (stack.pop() / Number(temp)) | 0
        operationStack.pop()
      } else if (operation === '*') {
        temp = stack.pop() * Number(temp)
        operationStack.pop()
      }

      operationStack.push(c)
      stack.push(Number(temp))
      temp = ''
    }
  }

  temp = stack.shift()
  while (operationStack.length > 1) {
    operation = operationStack.shift()
    if (operation === '+') {
      temp += stack.shift()
    } else if (operation === '-') {
      temp -= stack.shift()
    }
  }

  return temp
};

// const s = "3-1+5/2+1+2*3+1"
// const s = " 3+5 / 2 "
// const s = " 3/2 "
const s = "3+2*2"
console.log(calculate(s));
