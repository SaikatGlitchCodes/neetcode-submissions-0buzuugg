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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let count = 0;
        let result = 0;
        function dfs(node){
            if(root == null) return null;

            node.left && dfs(node.left);
            count++
            if(count == k) result = node.val
            node.right && dfs(node.right);
        }
        console.log(dfs(root));
        return result
    }
}
