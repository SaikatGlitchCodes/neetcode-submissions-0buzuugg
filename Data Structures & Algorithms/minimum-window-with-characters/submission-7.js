class Solution {
    minWindow(s, t) {
        if (t.length > s.length) return "";

        const arr = new Array(128).fill(0);

        for (const ch of t) {
            arr[ch.charCodeAt(0)]++;
        }

        let l = 0;
        let need = t.length;

        let start = 0;
        let minLen = Infinity;

        for (let r = 0; r < s.length; r++) {
            const rightIndex = s.charCodeAt(r);

            if (arr[rightIndex] > 0) {
                need--;
            }

            arr[rightIndex]--;

            while (need === 0) {
                if (r - l + 1 < minLen) {
                    minLen = r - l + 1;
                    start = l;
                }

                const leftIndex = s.charCodeAt(l);

                arr[leftIndex]++;

                if (arr[leftIndex] > 0) {
                    need++;
                }

                l++;
            }
        }

        return minLen === Infinity
            ? ""
            : s.slice(start, start + minLen);
    }
}