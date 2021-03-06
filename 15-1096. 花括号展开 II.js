/**
如果你熟悉 Shell 编程，那么一定了解过花括号展开，它可以用来生成任意字符串。

花括号展开的表达式可以看作一个由 花括号、逗号 和 小写英文字母 组成的字符串，定义下面几条语法规则：

如果只给出单一的元素 x，那么表达式表示的字符串就只有 "x"。R(x) = {x}
例如，表达式 {"a"} 表示字符串 "a"。
而表达式 {"w"} 就表示字符串 "w"。
当两个或多个表达式并列，以逗号分隔时，我们取这些表达式中元素的并集。R({e_1,e_2,...}) = R(e_1) ∪ R(e_2) ∪ ...
例如，表达式 "{a,b,c}" 表示字符串 "a","b","c"。
而表达式 "{{a,b},{b,c}}" 也可以表示字符串 "a","b","c"。
要是两个或多个表达式相接，中间没有隔开时，我们从这些表达式中各取一个元素依次连接形成字符串。R(e_1 + e_2) = {a + b for (a, b) in R(e_1) × R(e_2)}
例如，表达式 "{a,b}{c,d}" 表示字符串 "ac","ad","bc","bd"。
表达式之间允许嵌套，单一元素与表达式的连接也是允许的。
例如，表达式 "a{b,c,d}" 表示字符串 "ab","ac","ad"​​​​​​。
例如，表达式 "a{b,c}{d,e}f{g,h}" 可以表示字符串 "abdfg", "abdfh", "abefg", "abefh", "acdfg", "acdfh", "acefg", "acefh"。
给出表示基于给定语法规则的表达式 expression，返回它所表示的所有字符串组成的有序列表。

假如你希望以「集合」的概念了解此题，也可以通过点击 “显示英文描述” 获取详情。

 

示例 1：

输入："{a,b}{c,{d,e}}"
输出：["ac","ad","ae","bc","bd","be"]
示例 2：

输入："{{a,z},a{b,c},{ab,z}}"
输出：["a","ab","ac","z"]
解释：输出中 不应 出现重复的组合结果。
 

提示：

1 <= expression.length <= 50
expression[i] 由 '{'，'}'，',' 或小写英文字母组成
给出的表达式 expression 用以表示一组基于题目描述中语法构造的字符串

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/brace-expansion-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function(expression) {
  // 数组去重
  const uniqueArr = arr => Array.from(new Set(arr))

  // 乘法运算符
  const multiplyOperator = (arr1, arr2) => {
    const res = []
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        res.push(`${arr1[i]}${arr2[j]}`)
      }
    }

    return res
  }

  const openTag = expression => {
    // {a,b,c}x => {ax,bx,cx}
    expression = expression.replace(/\{([a-z,]+)\}([a-z]+)/g, function (matchStr, s1, s2) {
      const arr = s1.split(',').map(s => s + s2).join(',')
      return '{' + arr + '}'
    })

    // x{a,b,c} => {xa,xb,xc}
    expression = expression.replace(/([a-z]+)\{([a-z,]+)\}/g, function (matchStr, s1, s2) {
      const arr = s2.split(',').map(s => s1 + s).join(',')
      return '{' + arr + '}'
    })

    // {a,b}{a,c} => {aa,ac,ba,bc}
    expression = expression.replace(/\{([a-z,]+)\}\{([a-z,]+)\}/g, function (matchStr, s1, s2) {
      return '{' + multiplyOperator(s1.split(','), s2.split(',')) + '}'
    })

    // {a,{b,c},d,{t,h}} => {a,b,c,d,t,h}
    expression = expression.replace(/\{([a-z,]+|(\{[a-z,]+\}))+\}/g, function (matchStr) {
      if (/\{([a-z,]+)\}\{([a-z,]+)\}/g.test(matchStr)) { return matchStr }
      return '{' + matchStr.replace(/[\{\}]/g, '') + '}'
    })

    if (/^\{[a-z,]+\}$/.test(expression)) {
      return uniqueArr(expression.slice(1, -1).split(',').sort())
    } else {
      return openTag(expression)
    }
  }

  // 没有括号的，直接展开
  if (/^[a-z,]+$/.test(expression)) {
    return uniqueArr(expression.split(','))
  }

  return openTag(expression)
};

// const expression = "{{a,z}{a,z},a{b,c},{{ab,z},{e,f{g,h,{l,m}}}}}"
// const expression = "{a,b}{c,{d,e}}"
// const expression = "{a,b}c{d,e}f"
// const expression = "{p,q,r}{s,t}a{x,z}z"
// const expression = "{{a,z},a{b,c},{ab,z}}"
const expression = "{{{c,g},{h,j},l}{a,{x,ia,o},w}{x,ia,o},{x,ia,o},a}"
console.log(braceExpansionII(expression));
