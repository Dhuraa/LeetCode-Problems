//Revisit again
//Try with reduced complexity

var sortArrayByParity = function(nums) {
    for (let i=0; i<nums.length;i++){
        for (j=0;j<nums.length-i;j++){
            if(nums[j+1]%2 === 0){
                let a = nums[j+1];
                nums[j+1] = nums[j];
                nums[j] = a;
            }
        }
    }
    return nums;
};

let nums = [3,6,1,2,4];
console.log(sortArrayByParity(nums));
