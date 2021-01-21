/**
给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。

示例 1:

输入: "abab"

输出: True

解释: 可由子字符串 "ab" 重复两次构成。
示例 2:

输入: "aba"

输出: False
示例 3:

输入: "abcabcabcabc"

输出: True

解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)
 */


 // 题目规定了长度，这种时候是可以用正则 + 循环的办法去暴力破解的

 /**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  const len = s.length
  const lengthHalf = s.length / 2
  const factor = [1]

  if (len < 2) { return false }

  // 1. 求约数
  for (let i = 2; i <= lengthHalf; i++) {
    if (len % i === 0) {
      factor.unshift(i)
    }
  }

  // 2. 判断是否根据约数重复字符串
  for (let i = 0; i < factor.length; i++) {
    const newStr = ''.padEnd(len, s.slice(0, factor[i]))
    if (newStr === s) {
      return true
    }
  }

  return false
};

const s = 'aav'
console.log(repeatedSubstringPattern(s));

/**
 * 心得：这个只是一个简单的题目，如果只从代码层面去考虑问题肯定写不出什么好的代码，
 *       很多问题其实都要从【数学】的角度去想。
 *       常用的有：交集，差集，合集，约数，最大公约数 ...
 *       这题我的解决思路就是转换成就约数，然后通过验证约数组合的方式确定是否满足题目。但是这样很慢！
 *       最好的解问题的思路竟然是通过计算周期的思路！
 */



 // 看到这个最优解的我，眼泪掉下来！
 // 掐头去尾，检验周期！
 /**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern1 = function (s) {
  let s1 = (s + s).slice(1, -1);
  return s1.indexOf(s) != -1;
};
