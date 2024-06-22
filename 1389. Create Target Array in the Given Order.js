// Can also use to insert a value at a specific index in an array
var createTargetArray = function(nums, index) {
    let output = [];
    for(let i=0;i<nums.length;i++){
        output.splice(index[i],0,nums[i]);
    }
    return output;
};

let nums = [0,1,2,3,4];
let index = [0,1,2,2,1];
createTargetArray(nums,index);