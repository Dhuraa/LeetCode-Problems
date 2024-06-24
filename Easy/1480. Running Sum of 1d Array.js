// var runningSum = function(nums) {
//     let output =[];
//     let a = 0;
//     let b =0;
//     for(let i=0; i<nums.length; i++){
//         b = nums[i] + a;
//         a = b;
//        output.push(b);
//     }
//     return output;
// };

var runningSum = function(nums) {
    let returnArr = [];
    for (let i=1;i<= nums.length;i++){
        let arr = nums.slice(0,i)
        returnArr.push(arr.reduce((acc,val)=>{
            return acc+val
        },0))
    }
    return returnArr;
};

let nums = [1,2,3,4];
runningSum(nums);