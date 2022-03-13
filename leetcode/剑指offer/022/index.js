/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function (head, k) {
  let fast = head;
  let fastIndex = 0;
  while (fastIndex < k) {
    fastIndex++;
    fast = fast.next;
  }

  let slow = head;
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
};
