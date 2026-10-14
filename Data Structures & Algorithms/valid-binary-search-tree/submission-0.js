class Solution {
    isValidBST(root) {
        return this.validate(root, -Infinity, Infinity);
    }

    validate(node, min, max) {
        if (node === null) return true;
        if (node.val <= min || node.val >= max) {
            return false;
        }

        return (
            this.validate(node.left, min, node.val) &&
            this.validate(node.right, node.val, max)
        );
    }
}