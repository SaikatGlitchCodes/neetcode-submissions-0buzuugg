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
     * @return {number}
     */
    height = 0;
    diameterOfBinaryTree(root) {
        this.getHeight(root);
        return this.height;
    }

    getHeight(node){
        if(node == null) return 0;
        let leftH = this.getHeight(node.left);
        let rightH = this.getHeight(node.right);
        this.height = Math.max(this.height, leftH+rightH)
        return 1+ Math.max(leftH, rightH);
    }

}
