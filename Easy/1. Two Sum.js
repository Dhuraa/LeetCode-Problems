//Poor Runtime Complexity
//Revisit Again(for better time complexity)

var twoSum = function(nums, target) {
    let returnArr = [];

    for (let i=0; i<nums.length;i++){
        for(let j=(nums.length-1);j>0;j--){
            if(nums[i] + nums[j] == target && i<j){
                returnArr.push(i,j);
            }
        }
    }
    return returnArr;
};

let nums =[3,2,4];
let target = 6;
twoSum(nums,target);