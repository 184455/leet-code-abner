/**
 * 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

示例1：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
限制：

0 <= 链表长度 <= 1000

注意：本题与主站 21 题相同：https://leetcode-cn.com/problems/merge-two-sorted-lists/

通过次数139,134提交次数191,186

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode (val) {
  this.val = val;
  this.next = null;
}
// 尾递归法
var mergeTwoLists = function(l1, l2) {
  if (!l1 || !l2) {
    return l1 || l2
  }

  const mergeList = (l1, l2, point) => {
    if (l2 && point) {
      if (point.val >= l2.val) {
        // 在 point 前插入操作
        const temp = { ...point }
        point.val = l2.val
        point.next = temp
        l2 = l2.next
      }
      if (point.next) {
        point = point.next
      } else {
        point.next = l2
        return l1
      }
    } else if (point) {
      return l1
    } else if (l2) {
      point.next = l2
      return l1
    } else {
      return l1
    }

    return mergeList(l1, l2, point)
  }

  return mergeList(l1, l2, l1)
};

// 虚拟头指针法
var mergeTwoLists = function(l1, l2) {
  const res = new ListNode()
  let point = res
  while (l1 && l2) {
    if (l1.val < l2.val) {
      point.next = l1
      l1 = l1.next
    } else {
      point.next = l2
      l2 = l2.next
    }
    point = point.next
  }

  if (l1) point.next = l1
  if (l2) point.next = l2

  return res.next
}

// const l1 = {
//   val: -9,
//   next: {
//     val: 3,
//     next: null
//   }
// }
// const l2 = {
//   val: 5,
//   next: {
//     val: 7,
//     next: null
//   }
// }
// const l1 = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 4,
//       next: null,
//     }
//   }
// }
// const l2 = {
//   val: 1,
//   next: {
//     val: 3,
//     next: {
//       val: 4,
//       next: null,
//     }
//   }
// }
// const l1 = null
// const l2 = null
const l1 = {
  val: 2,
  next: null
}
const l2 = {
  val: 1,
  next: null
}
console.log(JSON.stringify(mergeTwoLists(l1, l2)));
