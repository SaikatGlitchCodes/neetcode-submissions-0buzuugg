class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        const res = [];
        for(let str of strs){
            const arr = new Array(26).fill(0);
            for(let i=0; i<str.length; i++){
                arr[str.charCodeAt(i) - 97]++
            }
            const key = arr.join('*');
            map.set(key, [...(map.get(key) || []), str])
        }
        // console.log(map)
        for(let [key, val] of map){
            res.push(val)
        }
        return res
    }
}
