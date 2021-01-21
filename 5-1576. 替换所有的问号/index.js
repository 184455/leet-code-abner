//采用了常规的循环方法

/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
  const len = s.length;
  let res = '';
  const tag = {
    left: '',
    contentCount: 0,
    right: '',
    flag: false,
  }

  // 替换内容生成不重复的部分
  const replaceContent = ({ left = 'a', contentCount, right = 'b' }) => {
    let newLeft, newRight;
    const leftCode = left.charCodeAt(0)
    const rightCode = right.charCodeAt(0)
    for (let i = 97; i <= 122; i++) {
      if (i !== leftCode && i !== rightCode) {
        if (newLeft) {
          newRight = String.fromCharCode(i)
        } else {
          newLeft = String.fromCharCode(i)
        }
      }
      if (newLeft && newRight) {
        break;
      }
    }

    let res = '';
    while(contentCount--) {
      res += contentCount % 2 === 1 ? newLeft : newRight;
    }
  
    return res + right;
  };

  for (let i = 0; i < len; i++) {
    const str = s[i];
    if (str === '?') {
      tag.contentCount += 1;
      if (!tag.flag) {
        // 标记未初始化
        tag.left = s[i - 1]
        tag.flag = true;
      }

      if (i === len - 1) {
        // 最后一个问好
        res += replaceContent(tag);
      }
    } else {
      if (tag.flag) {
        // 标记有内容，需要替换
        tag.right = str;
        res += replaceContent(tag);
        tag.contentCount = 0;
        tag.right = '';
        tag.flag = false;
      } else {
        res += str;
      }
    }
  }

  return res;
};

// console.log(modifyString("??yw?ipkj?"));



// ===================================================== 分割线 =====================================================

// 正则法

/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
  // 替换内容生成不重复的部分
  const replaceContent = ({ left = 'a', contentCount, right = 'b' }) => {
    let newLeft, newRight;
    const leftCode = left.charCodeAt(0)
    const rightCode = right.charCodeAt(0)
    for (let i = 97; i <= 122; i++) {
      if (i !== leftCode && i !== rightCode) {
        if (newLeft) {
          newRight = String.fromCharCode(i)
        } else {
          newLeft = String.fromCharCode(i)
        }
      }
      if (newLeft && newRight) {
        break;
      }
    }

    let res = '';
    while(contentCount--) {
      res += contentCount % 2 === 1 ? newLeft : newRight;
    }
  
    return res + right;
  };

  return s.replace(/(\?+)(\w?)/g, function (matchRes, content, right, offset) {
    return replaceContent({ left: s[offset - 1] || '', contentCount: content.length, right })
  });
};

console.log(modifyString("??yw?ipkj?"));

