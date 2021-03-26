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
  let dummy = new ListNode(0, head);

  let current = dummy;
  while (current.next && current.next.next) {
    if (current.next.val === current.next.next.val) {
      const dupVal = current.next.val;
      while (current.next && current.next.val === dupVal) {
        current.next = current.next.next;
      }
    } else {
      current = current.next;
    }
  }
  return dummy.next;
};