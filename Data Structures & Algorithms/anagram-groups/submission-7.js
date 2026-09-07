class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        let result = []
        for(let i=0; i<strs.length; i++){
            const curr = strs[i].split('');
            const arr = new Array(26).fill(0);
            for(let j=0; j< curr.length; j++){
                arr[curr[j].charCodeAt('a')-97]++
            }
            const key = arr.join('^');

            if (!map.has(key)) {
                map.set(key, []);
            }

            map.get(key).push(strs[i]);
        }
        for(let [val, index] of map){
            result.push(index)
        }
        return result
    }
}
