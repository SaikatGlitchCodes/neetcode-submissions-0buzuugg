class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length-1;
        while(left < right){
            let total = numbers[left]+ numbers[right];
            if(target == total){
                return [left+1, right+1]
            }else if (target < total) right--
            else left++
        }
    }
}
