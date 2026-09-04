class Solution {
    threeSum(nums) {
        const res = [];

        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            const map = new Map();

            for (let j = i + 1; j < nums.length; j++) {
                const needed = -nums[i] - nums[j];

                if (map.has(needed)) {
                    res.push([nums[i], needed, nums[j]]);

                    while (
                        j + 1 < nums.length &&
                        nums[j] === nums[j + 1]
                    ) {
                        j++;
                    }
                }

                map.set(nums[j], j);
            }
        }

        return res;
    }
}