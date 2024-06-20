var smallerNumbersThanCurrent = function(nums) {
    let returnArr = [];
    for(let i=0;i<nums.length;i++){
        let count =0;
        for(let j=0;j<nums.length;j++){
            if(nums[i]>nums[j]){
                count++;
            }
        }
        returnArr.push(count);
    }
    return returnArr;
};

nums = [6,5,4,8]
console.log(smallerNumbersThanCurrent(nums));