/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(s) {
  let res = '', str = s[0], current = '', count = 1

  for (let i = 1; i < s.length; i++) {
    current = s[i]
    if (current === str) {
      count++
    } else {
      res += (str + count)
      str = current
      count = 1
    }
  }

  // 最后一项
  res += (str + count)

  return res.length >= s.length ? s : res
};

const s = 'aaaaabbbbbgggbn'
console.log(compressString(s));


// 循环统计法。除了这个方法就没有其他好的办法了
