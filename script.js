var countKDifference = function(nums, k) {
    let count =0;
    let left =0;
    let right=nums.length-1;
    while(left<right){
        console.log(left,right);
        if(Math.abs(nums[left] - nums[right]) == k){
            console.log("in",nums[left], nums[right])
            count++;
            right--;
        }
        else{
            console.log("else",nums[left], nums[right])
            left++;
        }
    }
    console.log(count);
};













let nums = [1,2,2,1];
let k = 1;

countKDifference(nums,k);