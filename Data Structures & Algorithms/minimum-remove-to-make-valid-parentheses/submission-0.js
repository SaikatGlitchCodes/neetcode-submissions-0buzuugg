class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    minRemoveToMakeValid(s) {
        let openCnt = 0,
            closeCnt = 0;
        for (const c of s) {
            if (c === ')') closeCnt++;
        }

        let res = [];
        for (const c of s) {
            if (c === '(') {
                if (openCnt === closeCnt) continue;
                openCnt++;
            } else if (c === ')') {
                closeCnt--;
                if (openCnt === 0) continue;
                openCnt--;
            }
            res.push(c);
        }

        return res.join('');
    }
}