/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 这个算法，实现了功能，但是会存在大数据，整数益出的问题
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  function listNodeToNumber (listNode) {
    const val = String(listNode.val)
    if (listNode.next) {
      return listNodeToNumber(listNode.next) + val
    }
    return val
  }
  function numberToListNode (numArr) {
    if (numArr.length === 1) {
      return {
        val: Number(numArr[0]),
        next: null,
      }
    }
    return ({
      val: Number(numArr.pop()),
      next: numberToListNode(numArr),
    })
  }
  const res = Number(listNodeToNumber(l1)) + Number(listNodeToNumber(l2))
  return numberToListNode(String(res).split(''))
};
/**
 * 解体思路：根据两个链表，用递归，根据层级结构，生成结果链表
 * 难点：处理进位问题
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers1 = function(l1, l2) {
  function mergeListNode (one, two, rest = 0) {
    const addRes = (one.val || 0) + (two.val || 0) + rest
    if (!one.next && !two.next) {
      // 结束递归
      if (addRes > 9) {
        // 处理进位问题
        return ({
          val: addRes - 10,
          next: {
            val: 1,
            next: null
          },
        })
      } else {
        return ({
          val: addRes,
          next: null,
        })
      }
    }

    // 继续递归
    if (addRes > 9) {
      return ({
        val: addRes - 10,
        next: mergeListNode(one.next || {}, two.next || {}, 1),
      })
    } else {
      return ({
        val: addRes,
        next: mergeListNode(one.next || {}, two.next || {}, 0),
      })
    }
  }
  return mergeListNode(l1, l2)
};

const l1 = {
  val: 8,
  next: { val: 1, next: null }
}
const l2 = {
  val: 0,
  next: null
}
console.log(addTwoNumbers1(l1, l2))
