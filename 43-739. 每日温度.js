/**
 * 请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。

通过次数158,661提交次数237,343

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/daily-temperatures
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  let i, len = T.length, temp = -1
  const res = []
  T.forEach((num, index) => {
    for (i = index + 1; i < len; i++) {
      if (T[i] > num) {
        temp = i
        break
      }
    }

    if (temp > index) {
      // res.push(temp - index)
      T[index] = temp - index
    } else {
      // res.push(0)
      T[index] = 0
    }
  })

  return T
};

var dailyTemperatures = function(T) {
  const res = new Array(T.length).fill(0)
  const stack = []
  for (let i = T.length - 1; i > -1; i--) {
      while (stack.length && T[i] >= T[stack[stack.length - 1]]) {
          stack.pop()
      }
      if (stack.length) {
          res[i] = stack[stack.length - 1] - i
      }
      stack.push(i)
  }

  return res
};

const T = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(dailyTemperatures(T));