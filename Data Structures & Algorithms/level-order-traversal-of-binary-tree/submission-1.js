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
     * @return {number[][]}
     */
    result = []
    levelOrder(root) {
        this.order(root, 0)
        return this.result
    }

    order(node, level){
        if(node == null ) return [];
        if(level == this.result.length){
            this.result.push([])
        }

        this.result[level].push(node.val)

        node.left && this.order(node.left, level+1);
        node.right && this.order(node.right, level+1);
    }

    
}
