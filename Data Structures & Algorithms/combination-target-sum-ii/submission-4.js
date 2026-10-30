class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = []
        candidates.sort((a,b)=> a-b);
        // 1,2,2,4,5,6,9
        dfs(0, [], 0)
        function dfs(sum, curr, index){
            if(sum == target){
                res.push([...curr]);
                return
            }
            if(sum > target) return
            for(let i=index; i<candidates.length; i++){
                if(i > index && candidates[i] == candidates[i-1]) continue;
                sum+=candidates[i];
                curr.push(candidates[i]);
                dfs(sum, curr, i+1)
                sum-=candidates[i];
                curr.pop()
            }
        }

        return res;
    }
}
