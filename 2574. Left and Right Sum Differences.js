var leftRightDifference = function(nums) {
    let leftSum= []; 
    let rightSum =[];
    let rev =[];
    let output =  [];
    for(let i=0;i<nums.length;i++){
        let arr = nums.slice(0,i);
        leftSum.push(arr.reduce((acc,val)=>{
            return acc+val;
        },0));
        rev.push(nums[(nums.length-1)-i]);
    }

    for(let i=0;i<rev.length;i++){
        let arr2 = rev.slice(0,i);
        rightSum.push(arr2.reduce((acc,val)=>{
            return acc+val;
        },0));
    };

    rightSum = rightSum.reverse();

    for(let i=0;i<nums.length;i++){
       output.push(Math.abs(leftSum[i]-rightSum[i]));
    };

  return output;
};

nums=[1];
leftRightDifference(nums);