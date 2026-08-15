/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let l = 1,
            r = n;
        while (true) {
            let m1 = l + Math.floor((r - l) / 3);
            let m2 = r - Math.floor((r - l) / 3);
            if (guess(m1) === 0) return m1;
            if (guess(m2) === 0) return m2;
            if (guess(m1) + guess(m2) === 0) {
                l = m1 + 1;
                r = m2 - 1;
            } else if (guess(m1) === -1) {
                r = m1 - 1;
            } else {
                l = m2 + 1;
            }
        }
    }
}
