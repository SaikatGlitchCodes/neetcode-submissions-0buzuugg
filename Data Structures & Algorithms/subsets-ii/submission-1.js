class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    generateRer(index, temp, arr, res){
        res.push([...temp]);

        for(let i=index; i<arr.length; i++){
            if(i>index && arr[i] == arr[i-1]) continue;
            temp.push(arr[i])
            this.generateRer(i+1, temp, arr, res)
            temp.pop()
        }
    }
    subsetsWithDup(nums) {
        let res = [];
        nums.sort((a,b)=>a-b);
        this.generateRer(0, [], nums, res );
        return res
    }
}
