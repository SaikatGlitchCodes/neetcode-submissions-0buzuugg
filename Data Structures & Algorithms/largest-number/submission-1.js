class Solution {
    /**
     * @param {number[]} nums
     * @return {string}
     */
    largestNumber(nums) {
        let arr = nums.map(String)
        arr.sort((a,b)=>{
            let ab = a+b;
            let ba = b+a;
            if(ab > ba) return -1
            else if(ab < ba) return 1
            return 0
        })
        return arr.join('')[0] == "0"? "0" : arr.join('')
    }
}
