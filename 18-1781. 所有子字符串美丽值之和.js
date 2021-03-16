/**
 * 一个字符串的 美丽值 定义为：出现频率最高字符与出现频率最低字符的出现次数之差。

比方说，"abaacc" 的美丽值为 3 - 1 = 2 。
给你一个字符串 s ，请你返回它所有子字符串的 美丽值 之和。

 

示例 1：

输入：s = "aabcb"
输出：5
解释：美丽值不为零的字符串包括 ["aab","aabc","aabcb","abcb","bcb"] ，每一个字符串的美丽值都为 1 。
示例 2：

输入：s = "aabcbaa"
输出：17
 

提示：

1 <= s.length <= 500
s 只包含小写英文字母。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sum-of-beauty-of-all-substrings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
  const len = s.length
  if (len < 3) { return 0 }

  const map = {}
  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(97 + i)] = i
  }

  let i = 0, j = 0
  let min = 0, sum = 0
  let countArr = []
  while (i < len) {
    j = i + 2
    countArr = (new Array(26)).fill(0)
    countArr[map[s[i]]] += 1
    countArr[map[s[i + 1]]] += 1
    while (j < len) {
      countArr[map[s[j]]] += 1
      min = Math.min(...(countArr.filter(i => i > 0)))
      sum = sum + Math.max(...countArr) - min

      j++
    }

    i++
  }

  return sum
};

const s = "hiwhhrjugmpnyxzrvyxsuxeeqaecyasqdfbotrdtcglquuylygbziiaumetxklicurowfagiwgistkufvotosttvodnfknzlznorvhxqpekbraeiwiwlaleyjmzeakxxgplpophojiaiatrrjdhjbuevrjejbvsugfjjwhuiytidvujyrrchelwixarxokgwlyjaapxywseocyxvtnlagvlhwkqkatimwuetmmkgcxacmjwnybwkwbzgfauudkxejbtnndywxlswllgatfyyyafcqhbmmlmmsstosvgyqlnwqbfobztftqnsfqbwzgrdsihhzdcutypzcoiroyngtmryhjvdbluoebyxlwbrwlyqeeirpdwutahhybnkgbhlehnagtlnpeioooqhr"
// const s = "aabcb"
console.log(beautySum(s));
