var countPairs = function(nums, target) {
    nums.sort((a,b)=>{return a-b;});
 let left =0;
 let right = nums.length - 1;
 count = 0;
 console.log(nums)
 while(left<right){
    if ((nums[left]+nums[right]) < target){
        console.log("in her",left,right);
        count += right-left;
        left++;
    }
    else{
        right--;
    }
 }
 return count;
};


nums =[-6,2,5,-2,-7,-1,3];
target = -2;
console.log(countPairs(nums, target));

// var countPairs = function(nums, target) {
//     let count =0;
//    for(let i=0;i<nums.length;i++){
//     for(let j=i+1;j<nums.length;j++){
//         if(((nums[i]+nums[j]) < target)){
//             console.log(i,j)
//             count++;
//         }
//     }
//    }
//    return count;
// };