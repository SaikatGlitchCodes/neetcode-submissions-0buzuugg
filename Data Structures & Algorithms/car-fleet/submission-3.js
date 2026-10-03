class Solution {
    carFleet(target, position, speed) {
        const cars = [];

        for (let i = 0; i < position.length; i++) {
            cars.push([
                position[i],
                (target - position[i]) / speed[i]
            ]);
        }
        console.log('cars', cars);

        cars.sort((a, b) => b[0] - a[0]);

        console.log('sorted cars', cars)

        let fleets = 0;
        let maxTime = 0;

        for (const [pos, time] of cars) {
            if (time > maxTime) {
                fleets++;
                maxTime = time;
            }
        }

        return fleets;
    }
}