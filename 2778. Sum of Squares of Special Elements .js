var sumOfSquares = function(nums) {
    let length = nums.length
    let output = 0;

    for(let i=1;i<=length;i++){
        if(length % i === 0){
            output += (nums[i-1]**2);
        }
    }
    return output;
};

let nums = [2,7,1,19,18,3];
sumOfSquares(nums);