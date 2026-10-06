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
     * @return {boolean}
     */
    isBalanced(root) {
        if(root == null) return true
        const rightNode = this.getHeight(root.right);
        const leftNode = this.getHeight(root.left);

        if(Math.abs(rightNode - leftNode) > 1) return false
        return this.isBalanced(root.right) && this.isBalanced(root.left)
    }

    getHeight(node){
        if(node == null) return 0
        return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }
}
