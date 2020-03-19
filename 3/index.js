/**
 * @param {string} s
 * @return {number}
 * @time 308 ms
 * @memory 41.9 MB
 */
var lengthOfLongestSubstring = function(s) {
  if (!s.length) return 0
  if (s.length === 1) return 1
  let temp = new Map()
  let res = 0
  const strLength = s.length
  for (let i = 0; i < strLength; i++) {
    temp.set(s[i], i)
    for (let j = i + 1; j < strLength; j++) {
      const str = s[j]
      if (temp.has(str)) {
        // 存在
        res = res < temp.size ? temp.size : res
        temp = new Map()
        break
      } else {
        // 不存在
        temp.set(s[j], j)
        if ((j + 1) === strLength) {
          res = res < temp.size ? temp.size : res
        }
      }
    }
  }
  return res
};

/**
 * @param {string} s
 * @return {number}
 * @time 96 ms
 * @memory 39.9 MB
 */
var lengthOfLongestSubstring1 = function(s) {
  let resArr = ''
  let resLen = 0
  for (let str of s) {
    const findIndex = resArr.indexOf(str)
    if (findIndex > -1) {
      // 找到
      resLen = Math.max(resArr.length, resLen)
      resArr = resArr.slice(findIndex + 1)
    }
    resArr += str
  }
  return Math.max(resArr.length, resLen)
};

// 主要的解题思路：第一层循环，寻找不重复的部分，并加到临时变量保存
// 一旦发现重复的元素，重复元素  之前的元素就会被删除掉
// 一直遍历，直到所有元素遍历完成

const s = "pwwkew"
console.log(lengthOfLongestSubstring1(s))
