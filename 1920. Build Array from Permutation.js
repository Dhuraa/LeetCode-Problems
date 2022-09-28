var buildArray = function(nums) {
    let output =[];
    for (let i=0;i<nums.length;i++){
        output.push(nums[nums[i]]);
    }
    return output;
};

let nums = [0,2,1,5,3,4];
buildArray(nums);