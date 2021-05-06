/**
 * 给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

 

示例 1：

输入：s = "3[a]2[bc]"
输出："aaabcbc"
示例 2：

输入：s = "3[a2[c]]"
输出："accaccacc"
示例 3：

输入：s = "2[abc]3[cd]ef"
输出："abcabccdcdcdef"
示例 4：

输入：s = "abc3[cd]xyz"
输出："abccdcdcdxyz"
通过次数93,155提交次数170,860

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/decode-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 正则 + 递归
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const reg = /(\d+)\[([0-9a-zA-Z]+?)\]/g
  s = s.replace(reg, (match, group1, group2) => group2.repeat(group1))

  if (reg.test(s)) {
    return decodeString(s)
  }
  return s
};

// 栈 解法
// 一次循环，注意一次循环里面只解决一个问题，都很简单的！
// 注意这个 repeatString 这个变量。它链接着类似递归的结果和调用过程，这个设计是真的很巧妙的！
var decodeString = function(s) {
  const mulStack = [], strStack = []
  let repeatTimes = '', repeatString = ''
  for (const c of s) {
    if (c >= '0' && c <= '9') {
      repeatTimes += c
    } else if (c === '[') {
      strStack.push(repeatString)
      mulStack.push(repeatTimes)
      repeatString = ''
      repeatTimes = ''
    } else if (c === ']') {
      repeatString = strStack.pop() + repeatString.repeat(mulStack.pop())
    } else {
      repeatString += c
    }
  }

  return repeatString;
};

// const s = "100[leetcode]"
// const s = "abc3[cd]xyz"
// const s = "2[abc]3[cd]ef"
const s = "hhh3[a2[c]]"
// const s = "3[a]2[bc]"
console.log(decodeString(s));
