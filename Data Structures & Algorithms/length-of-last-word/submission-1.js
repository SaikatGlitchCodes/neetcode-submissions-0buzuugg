class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        const news = s.trim().split(' ');
        return news[news.length-1].length
    }
}
