class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l=0; let r=numbers.length-1;
        while(l<r){
            const new_t = numbers[l] + numbers[r];
            if(new_t < target) l++
            else if(new_t > target) r--
            else return [l+1,r+1]
        }
    }
}
