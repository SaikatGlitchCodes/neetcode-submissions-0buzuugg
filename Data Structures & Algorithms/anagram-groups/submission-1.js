class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = [];
        const map = new Map();
        for (let str of strs){
            let arr = new Array(26).fill(0);
            for(let i=0; i< str.length; i++){
                arr[str.charCodeAt(i) - 'a'.charCodeAt(0)]++
            }
            arr = arr.join('#');
            const group = map.get(arr) || [];
            group.push(str)
            map.set(arr, group )
        }  
        console.log(map)

        return [...map.values()]
    }
}
