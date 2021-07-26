/**
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

 

示例 1：

输入："hello"
输出："holle"
示例 2：

输入："leetcode"
输出："leotcede"
 

提示：

元音字母不包含字母 "y" 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-vowels-of-a-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const mapping = {
    a: 'a', e: 'e', i: 'i', o: 'o', u: 'u',
    A: 'A', E: 'E', I: 'I', O: 'O', U: 'U',
  }
  let header = 0, end = s.length - 1, temp
  const arr = s.split('')
  while (header <= end) {
    if (mapping[arr[header]] && mapping[arr[end]]) {
      temp = arr[header]
      arr[header] = arr[end]
      arr[end] = temp
      header++
      end--
    } else if (!mapping[arr[header]]) {
      header++
    } else if (!mapping[arr[end]]) {
      end--
    }
  }

  return arr.join('')
};

// const s = "leetcode"
// const s = "hello"
const s = 'aA'
console.log(reverseVowels(s));
