class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for(let i=0; i<strs.length; i++){
            let arr = new Array(26).fill(0);
            for(let char of strs[i]){
                arr[char.charCodeAt('a')-97] = (arr[char.charCodeAt('a')-97] || 0) +1
            }
            const key = arr.join('-');

if (!map.has(key)) {
    map.set(key, []);
}

map.get(key).push(strs[i]);
            
        }
        
        return Array.from(map.values())
    }
}
