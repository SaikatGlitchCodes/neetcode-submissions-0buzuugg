class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if (nums1.length > nums2.length) {
            [nums1, nums2] = [nums2, nums1];
        }

        const l1 = nums1.length;
        const l2 = nums2.length;
        const total = l1 + l2;
        const half = Math.floor((total + 1) / 2);

        let l = 0;
        let r = l1;

        while (l <= r) {
            const i = l + Math.floor((r - l) / 2);
            const j = half - i;

            const l1left =
                i > 0 ? nums1[i - 1] : Number.MIN_SAFE_INTEGER;

            const l1right =
                i < l1 ? nums1[i] : Number.MAX_SAFE_INTEGER;

            const l2left =
                j > 0 ? nums2[j - 1] : Number.MIN_SAFE_INTEGER;

            const l2right =
                j < l2 ? nums2[j] : Number.MAX_SAFE_INTEGER;

            // Correct partition
            if (l1left <= l2right && l2left <= l1right) {
                if (total % 2 !== 0) {
                    return Math.max(l1left, l2left);
                }

                return (
                    Math.max(l1left, l2left) +
                    Math.min(l1right, l2right)
                ) / 2;
            }

            // Took too many from nums1
            if (l1left > l2right) {
                r = i - 1;
            }

            // Took too few from nums1
            else {
                l = i + 1;
            }
        }

        return -1;
    }
}