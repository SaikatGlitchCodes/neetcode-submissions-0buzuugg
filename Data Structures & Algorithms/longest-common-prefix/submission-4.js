class Solution {
    longestCommonPrefix(strs) {
        let min = strs[0].length;

        for (let i = 0; i < strs.length - 1; i++) {
            let curr = 0;

            for (let j = 0; j < min; j++) {
                if (strs[i][j] === strs[i + 1][j]) {
                    curr++;
                } else {
                    break;
                }
            }

            min = Math.min(min, curr);
            if(min==0) return ""
        }

        return strs[0].slice(0, min);
    }
}