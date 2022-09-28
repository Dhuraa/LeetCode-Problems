var runningSum = function(nums) {
    let output =[];
    let a = 0;
    let b =0;
    for(let i=0; i<nums.length; i++){
        b = nums[i] + a;
        a = b;
       output.push(b);
    }
    return output;
};

let nums = [1,2,3,4];
runningSum(nums);