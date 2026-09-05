class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
        const map = new Map();
        order.split('').forEach((v,i)=> map.set(v,i));
        for(let i=0; i<words.length-1; i++){
            const w1 = words[i];
            const w2 = words[i+1];
            console.log(w1, w2)
            for(let j=0; j<w1.length; j++){
                if(j== w2.length) return false
                if(w1[j]!== w2[j]){
                    if(map.get(w1[j]) > map.get(w2[j])) return false;
                    break;
                }
            }
        }
        return true
    }
}
