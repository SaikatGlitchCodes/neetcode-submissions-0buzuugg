class Solution {
    minWindow(s, t) {
        if (s.length < t.length) return "";

        let l = 0;
        let r = 0;
        let res = Infinity;
        let resStr = "";

        let tmap = new Map();
        for (let char of t) {
            tmap.set(char, (tmap.get(char) || 0) + 1);
        }

        let checker = t.length;
 
        while (r < s.length) {

            // expand
            if (tmap.has(s[r])) {
                if (tmap.get(s[r]) > 0) checker--;
                tmap.set(s[r], tmap.get(s[r]) - 1);
            }

            // shrink
            while (checker === 0) {
                if (r - l + 1 < res) {
                    res = r - l + 1;
                    resStr = s.substring(l, r + 1);
                }

                if (tmap.has(s[l])) {
                    tmap.set(s[l], tmap.get(s[l]) + 1);
                    if (tmap.get(s[l]) > 0) checker++;
                }

                l++;
            }

            r++;
        }

        return resStr;
    }
}