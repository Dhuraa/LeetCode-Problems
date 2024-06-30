var maxProduct = function(nums) {
    nums.sort((a,b)=> a-b);
    let n = nums.length
    return ((nums[n-1] -1)*(nums[n-2] -1));
};

let nums = [1,5,4,5];
console.log(maxProduct(nums));