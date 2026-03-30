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
            let result = numbers[left] + numbers[right];
            if(result == target) return [left+1, right+1];
            else if(result > target) right--
            else left ++
        }
        

    }
}
