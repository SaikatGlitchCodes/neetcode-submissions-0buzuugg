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
     * @return {number[]}
     */
    rightSideView(root) {
        let result = [];
        let queue = [root];
        this.traverse(root, result, 0);
        return result;
    }

    traverse(root, result, level){
        if(root == null) return null;
        if(level == result.length){
            result.push(root.val);
        }

        root.right && this.traverse(root.right, result, level+1);
        root.left && this.traverse(root.left, result, level+1);
        
    }
}
