class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        for(let i=0; i< nums.length; i++){
            
            const new_t = target - nums[i];
            console.log(map, new_t)
            if(map.has(new_t)){
                return [map.get(new_t), i]
            } map.set(nums[i], i)
        }
        return []
    }
}
