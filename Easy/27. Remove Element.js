//Confusing question
// Just wants count or array too?

var removeElement = function(nums, val) {
    let expectedNums = [];
    nums.sort((a,b) => a-b);
    let maxNum = Math.max(...nums);
    let count = nums.length
    
    for (let i=0; i<nums.length;i++){
        if(nums[i] === val){
            nums[i] = maxNum+1;
            count--;
        }
    }

    expectedNums = nums.sort((a,b) => a-b);

    return count;
};

let nums = [0,1,2,2,3,0,4,2];
let val = 2;
removeElement(nums,val);