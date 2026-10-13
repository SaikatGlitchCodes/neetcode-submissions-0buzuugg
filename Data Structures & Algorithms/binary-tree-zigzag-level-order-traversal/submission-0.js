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
    zigzagLevelOrder(root) {
        this.traverse(root, 0);
        for(let i=0; i<this.result.length; i++){
            if(i%2==1){
                this.result[i].reverse()
            }
        }
        return this.result
    }

    traverse(node, level){
        if(node == null) return [];
        if(this.result.length == level) this.result.push([]);
        this.result[level].push(node.val);
//[[1],[2,3],[4,5,6,7]]
// [[1],[3,2],[7,6,5,4]]
            node.left && this.traverse(node.left, level+1);
            node.right && this.traverse(node.right, level+1)
        
    }
}
