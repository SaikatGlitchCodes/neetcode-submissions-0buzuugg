/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // Fix 1: Keep a reference to the start of the list using a dummy node
        let dummy = new ListNode(); 
        let current = dummy; // This pointer will advance through the list

        while (list1 && list2) {
            if (list1.val < list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next; // Advance our tracking pointer
        }

        // Link the remaining nodes of the unfinished list
        if (list1) {
            current.next = list1;
        } else {
            current.next = list2;
        }

        // Fix 2: Return the node AFTER the dummy node, which is the real head
        return dummy.next; 
    }
}
