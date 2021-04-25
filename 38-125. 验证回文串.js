/**
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false
通过次数224,245提交次数476,093


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-palindrome
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase()
  const map = {}
  for (let k = 0; k < 10; k++) {
    map[k] = 1
  }
  for (let k = 97; k < 123; k++) {
    map[String.fromCharCode(k)] = 1
  }

  let i = 0, j = s.length - 1
  while (i <= j) {
    if (!map[s[i]]) {
      i++
    } else if (!map[s[j]]) {
      j--
    } else {
      // 两边都是合法的数据
      if (s[i] !== s[j]) {
        return false
      } else {
        i++
        j--
      }
    }
  }

  return true
};

// 利用正则改一下
var isPalindrome = function(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

  let i = 0, j = s.length - 1
  while (i <= j) {
    if (s[i] !== s[j]) {
      return false
    } else {
      i++
      j--
    }
  }

  return true
};

// const s = "race a car"
const s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s));