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
        const arr = [];
        function dfs(node){
            if(root == null) return null;
            arr.push(node.val)
            node.left && dfs(node.left);
            node.right && dfs(node.right);
        }
        dfs(root);
        arr.sort((a,b)=> a-b);
        return arr[k-1]
    }
}
