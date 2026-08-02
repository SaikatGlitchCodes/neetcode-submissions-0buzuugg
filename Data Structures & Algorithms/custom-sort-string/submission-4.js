class Solution {
    /**
     * @param {string} order
     * @param {string} s
     * @return {string}
     */
    customSortString(order, s) {
        if(!order.length){
            return s.split('').sort().join('')
        }
        const map = new Map();
        for(let chr of s){
            map.set(chr, (map.get(chr)||0) + 1);
        }
        console.log(map)
        let result = '';
        for(let o of order){
            if(map.has(o)){
                let count = map.get(o);
                while(count > 0){
                    result += o
                    count --
                }
                map.delete(o)
            }
        }
        for(let [key, value] of map){
            while(value > 0){
                result += key
                value--
            }
        }
        console.log(result, map);
        return result
    }
}
