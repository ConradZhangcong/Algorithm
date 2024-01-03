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
var removeNodes = function (head) {
  // 反转链表
  head = reverseNode(head);
  let current = head;
  // 删除右侧比当前小的节点
  while (current.next) {
    if (current.next.val <= current.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  // 反转链表
  return reverseNode(head);
};

const reverseNode = (head) => {
  let prev = null;
  let curr = head;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

const nodeList = {
  val: 5,
  next: {
    val: 2,
    next: {
      val: 13,
      next: {
        val: 3,
        next: {
          val: 8,
          next: null,
        },
      },
    },
  },
};

console.log(removeNodes(nodeList));
