//Revisit Again

var arithmeticTriplets = function(nums, diff) {
    let count=0;
    if (nums.length < 3){
        return 0;
    }
    for (let i=0;i<nums.length;i++){
        for (let j=i+1;j<nums.length;j++){
            for (let k=j+1;k<nums.length;k++){
                if(nums[j] - nums[i] == diff && nums[k] - nums[j] == diff){
                    count++;
                }
            }
        }
    }
    return count;
};

let nums = [0,1,4,6,7,10];
let diff = 3;
console.log(arithmeticTriplets(nums,diff));