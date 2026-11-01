class Solution {
    networkDelayTime(times, n, k) {
        const map = {};

        for (let i = 1; i <= n; i++) {
            map[i] = [];
        }

        for (const [s, d, t] of times) {
            map[s].push([d, t]);
        }

        const cadence = new Array(n).fill(Infinity);
        const visited = new Array(n).fill(false);

        cadence[k - 1] = 0;

        for (let count = 0; count < n; count++) {

            // Find closest unvisited node
            let current = -1;

            for (let i = 0; i < n; i++) {
                if (
                    !visited[i] &&
                    (current === -1 ||
                     cadence[i] < cadence[current])
                ) {
                    current = i;
                }
            }

            // Remaining nodes are unreachable
            if (
                current === -1 ||
                cadence[current] === Infinity
            ) {
                break;
            }

            visited[current] = true;

            // Our graph nodes are 1-based
            const node = current + 1;

            for (const [next, time] of map[node]) {
                cadence[next - 1] = Math.min(
                    cadence[next - 1],
                    cadence[current] + time
                );
            }
        }

        const max = Math.max(...cadence);

        return max === Infinity ? -1 : max;
    }
}