/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  // 1. 找到中间的结点
  while (fast) {
    slow = head.next;
    fast = fast.next ? fast.next.next : fast.next;
  }

  // 2. 逆转后面一半链表
  while(slow){
    // show.next.next = slow.next
    // let temp = slow.next
  }
};
