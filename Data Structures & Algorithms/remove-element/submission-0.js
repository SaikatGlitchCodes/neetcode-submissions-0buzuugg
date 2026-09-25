class Solution {
    removeElement(nums, val) {
        let write = 0;

        for (let read = 0; read < nums.length; read++) {
            if (nums[read] !== val) {
                nums[write] = nums[read];
                write++;
            }
        }
        console.log(nums)
        return write;
    }
}