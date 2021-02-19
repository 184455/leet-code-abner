// 本文参考：https://blog.csdn.net/v_july_v/article/details/7041827
// http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html

// 1. 第一部分：引出
// 假设有一个字符串：s = 'BBC ABCDAB ABCDABCDABDE'
//            模式：p = 'ABCDABD'
// 问你：模式 s 与 p 是否能匹配上
// 最简单的方法：直接暴力匹配！

/**
 * 字符串暴力匹配代码
 * @param {string} s 字符串
 * @param {string} p 模式
 */
function forcePatter (s, p) {
  const sLen = s.length
  const pLen = p.length

  let i = 0
  let j = 0

  while (i < sLen && j < pLen) {
    if (s[i] === p[j]) {
      j++
      i++
    } else {
      i = i - j + 1
      j = 0
    }
  }

  return i - j
}

// const s = 'BBC ABCDAB ABCDABCDABDE'
// const p = 'ABCDABD'
// console.log(forcePatter(s, p));

/**
 * kmp 字符串匹配算法
 * @param {string} s 字符串
 * @param {string} p 模式
 */
function kmp (s, p) {
  function getNext (p) {
    const next = [-1];
    const pLen = p.length - 1;
    let k = -1;
    let j = 0;

    while (j < pLen) {
      // p[k]表示前缀，p[j]表示后缀
      if (k === -1 || p[k] === p[j]) {
        ++k;
        ++j;

        // 因为不能出现 p[j] = p[next[j]]，所以当出现时需要继续递归，k = next[k] = next[next[k]]
        // 其实就是防止：abab 这样的模式字符串
        next[j] = p[k] !== p[j] ? k : next[k];
      } else {
        k = next[k];
      }
    }

    return next;
  }
  const sLen = s.length;
  const pLen = p.length;
  const next = getNext(p);
  let i = 0;
  let j = 0;

  while (i < sLen && j < pLen) {
    if (j === -1 || s[i] === p[j]) {
      // j === -1 或 字符匹配，继续寻找下一个匹配
      i++;
      j++;
    } else {
      // 如果 j !== -1，且当前字符匹配失败（即S[i] !== P[j]），则令 i 不变，j = next[j]    
			// next[j] 即为 j 所对应的next值
      j = next[j]
    }
  }

  return j === pLen ? i - j : -1
}

const s = 'abacababc'
const p = 'abab'
console.log(kmp(s, p));
