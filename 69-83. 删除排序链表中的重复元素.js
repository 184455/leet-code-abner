/**
 * 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。

返回同样按升序排列的结果链表。

 

示例 1：


输入：head = [1,1,2]
输出：[1,2]
示例 2：


输入：head = [1,1,2,3,3]
输出：[1,2,3]
 

提示：

链表中节点数目在范围 [0, 300] 内
-100 <= Node.val <= 100
题目数据保证链表已经按升序排列
通过次数281,455提交次数523,099

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let prev = head
  let current = prev && prev.next
  if (!current) {
    // 只有一个节点
    return head
  }

  let flag = null
  while (current) {
    if (prev.val === current.val) {
      // 两个值相等
      flag = prev
    } else {
      if (flag) {
        flag.next = current
        flag = null
      }
      prev = prev.next
    }

    current = current.next
  }

  if (flag) {
    flag.next = null
  }

  return head
};


// 这是官方的解法，代码高度精简，值得学习
var deleteDuplicates = function(head) {
  if (!head) {
    return head
  }

  let cur = head
  while (cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }

  return head
}

const head = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: {
        val: 4,
        next: null
      }
    }
  }
}
console.log(deleteDuplicates(head));