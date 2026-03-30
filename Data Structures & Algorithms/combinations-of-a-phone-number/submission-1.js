class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(digits.length ===0) return [];
        const mapping = {
            2: 'abc',
            3: 'def',
            4: 'ghi',
            5: 'jkl',
            6: 'mno',
            7: 'pqrs',
            8: 'tuv',
            9: 'wxyz'
        };

        console.log(mapping['2'])
        let result = []

        function generateRec(temp, i){
            if(temp.length == digits.length){
                result.push(temp);
                return
            }
            for(let char of mapping[digits[i]]){
                generateRec(temp+char, i+1)
            }

        }
        generateRec('', 0);
        return result
    }

}
