class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    generateRecur(arr, i, temp, result){
        result.push([...temp]);
        for(let j=i; j<arr.length; j++){
            temp.push(arr[j])
            this.generateRecur(arr, j+1, temp, result)
            temp.pop()
        }

    };
    subsets(nums) {
        let result = [];
        this.generateRecur(nums, 0, [], result);
        return result;  
    }
    
}
