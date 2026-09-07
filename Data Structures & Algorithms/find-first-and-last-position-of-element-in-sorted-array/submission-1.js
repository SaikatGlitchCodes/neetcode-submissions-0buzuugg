class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums, target) {
        let rightBias = BinarySearch(true);
        let leftBias = BinarySearch(false); 
        return [leftBias, rightBias]
        function BinarySearch(Rbias){
            let l=0;
            let r=nums.length-1;
            let i=-1;
            while(l<=r){
                let mid = Math.floor(l+(r-l)/2);
                if(nums[mid] > target) r=mid-1;
                else if(nums[mid] < target) l=mid+1;
                else{
                    i=mid
                    if(Rbias){
                        l=mid+1
                    }else{
                        r=mid-1
                    }
                }
            }

            return i
        }
    }
}
