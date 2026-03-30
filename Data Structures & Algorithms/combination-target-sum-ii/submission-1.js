class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = []
        candidates.sort((a,b)=>a-b);
        function genrec(sum, start, temp){
            if(sum == target) {
                res.push([...temp]);
                return
            }
            if(sum > target) return
            for(let i = start; i<candidates.length; i++){
                if(i > start && candidates[i] === candidates[i-1]) continue
                temp.push(candidates[i]);
                genrec(sum+candidates[i], i+1, temp);
                temp.pop()
            }
        }
        genrec(0, 0, [])
        return res
    }
}
