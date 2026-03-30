class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    generateRec(res, temp, arr, target, sum, index){
        if(sum == target){
            res.push([...temp]);
            return
        }
        if (sum > target) return
        for(let i = index; i< arr.length; i++){
            if(i > index && arr[i] === arr[i-1]) continue
            temp.push(arr[i])
            this.generateRec(res, temp, arr, target, sum+arr[i], i+1)
            temp.pop()
        }
    }
    combinationSum2(candidates, target) {
        let res = [];
        candidates.sort((a,b)=>a-b)
        this.generateRec(res, [], candidates, target, 0, 0);
        return res;
    }
}
