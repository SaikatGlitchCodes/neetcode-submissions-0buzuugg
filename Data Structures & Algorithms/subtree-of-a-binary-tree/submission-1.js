/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSame(rootA, rootB){
        if(rootA == null && rootB ==null) return true
        if(rootA == null || rootB ==null) return false
        if(rootA.val != rootB.val) return false
        return this.isSame(rootA.left, rootB.left) && this.isSame(rootA.right, rootB.right)
    }
    isSubtree(root, subRoot) {
        if(root == null) return false
        if(this.isSame(root, subRoot)) return true
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
    }
}
