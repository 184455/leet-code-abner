/**
给你一个字符串 s，找到 s 中最长的回文子串。

 

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"
示例 3：

输入：s = "a"
输出："a"
示例 4：

输入：s = "ac"
输出："a"

*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length === 1) { return s }
  let res = ''
  let lock = false
  let repeatTimes = -1
  let repeatStart = -1
  let repeatEnd = -1

  for (let i = 0; i < s.length; i++) {
    // 连续重复字符串
    if (s[i] === s[i + 1]) {
      if (!lock) {
        lock = true
        repeatStart = i
      }
    } else {
      if (lock) {
        if (repeatStart === 0 && i === (s.length - 1)) { return s }
        lock = false
        repeatEnd = i
        const substrEnd = repeatEnd - repeatStart + 1
        res = substrEnd > res.length ? s.substr(repeatStart, substrEnd) : res
      }
    }

    // 中心扩散
    const start = repeatStart > -1 ? repeatStart : i
    const end = repeatEnd > -1 ? repeatEnd : i
    if (!lock && s[start - 1] === s[end + 1] && s[end + 1]) {
      repeatTimes = 0
      while (repeatTimes > -1) {
        if (s[start - repeatTimes - 1] === s[end + repeatTimes + 1] && s[end + repeatTimes + 1]) {
          repeatTimes++
        } else {
          const substrEnd = (end + repeatTimes) - (start - repeatTimes) + 1
          res = substrEnd > res.length ? s.substr(start - repeatTimes, substrEnd) : res
          repeatTimes = -1
        }
      }
    }

    if (!lock && repeatStart > -1) {
      repeatStart = -1
      repeatEnd = -1
    }
  }

  return res || s[0]
};

const s = "aaa"
console.log(longestPalindrome(s));
