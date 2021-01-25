/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  if (s.length === 1) { return s }

  const singleStr = ''.padEnd(s.length, s[1])
  if (singleStr === s) { return s }

  return recursionStr(s.split('').sort(), [])
};

function recursionStr (arr, res) {
  const [one, two] = unique(arr)
  if (!two.length) {
    return res.concat(one).join('')
  }

  const [three, four] = unique(two)
  const five = res
    .concat(one)
    .concat(three.reverse())
  return recursionStr(four, five)
}

function unique (arr) {
  const res = []
  const rest = []
  arr.forEach(i => {
    if (res.indexOf(i) === -1) {
      res.push(i)
    } else {
      rest.push(i)
    }
  })

  return [res, rest]
}

const s = "aaaabbbbcccc"
console.log(sortString(s))
