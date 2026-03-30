class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = [];
        let set = new Set();
        function genRec(temp, start){
            console.log(temp, start)
            if(temp.length == nums.length){
                res.push([...temp]);
                return
            }
            if(temp.lenght > nums.length) return

            for(let i=0; i<nums.length; i++){
                if(!set.has(i)){
                    set.add(i)
                    temp.push(nums[i]);
                    genRec(temp, i+1)
                    set.delete(i)
                    temp.pop()
                }
            }
        }

        genRec([], 0);
        return res
    }
}
