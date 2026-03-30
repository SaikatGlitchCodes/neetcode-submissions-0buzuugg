class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length -1;
        while(left < right){
            let sum = numbers[right] + numbers[left]
            if(sum > target) right--
            if(target > sum) left++
            if(sum == target) return [left+1, right+1]
        }
        return []
    }
}
