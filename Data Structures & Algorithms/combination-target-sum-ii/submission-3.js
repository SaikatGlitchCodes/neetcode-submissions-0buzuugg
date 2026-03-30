class Solution {
    combinationSum2(candidates, target) {
        let res = [];

        candidates.sort((a, b) => a - b);

        function recurr(temp, sum, start) {
            if (sum === target) {
                res.push([...temp]);
                return;
            }

            if (sum > target) return;

            for (let i = start; i < candidates.length; i++) {

                // 🔥 correct duplicate handling
                if (i > start && candidates[i] === candidates[i - 1]) continue;

                temp.push(candidates[i]);

                recurr(temp, sum + candidates[i], i + 1);

                temp.pop();
            }
        }

        recurr([], 0, 0);
        return res;
    }
}