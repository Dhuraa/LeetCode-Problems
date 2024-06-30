var maxProductDifference = function(nums) {
    nums.sort((a,b)=> a-b);
    let n = nums.length;
    let val1 = nums[0]*nums[1];
    let val2 = nums[n-1]*nums[n-2];

    return val2-val1;

};

let nums = [4,2,5,9,7,4,8];
maxProductDifference(nums);