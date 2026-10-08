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
    goodNodes(root) {
        return this.traverse(root, root.val)
    }

    traverse(node, maxVal){
        if(node == null) return 0;

        let res = node.val >= maxVal ? 1:0;
        maxVal = Math.max(maxVal, node.val);
        res+=this.traverse(node.left, maxVal);
        res+=this.traverse(node.right, maxVal);
        return res;
    }
}
