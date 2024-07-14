var countPairs = function(nums, k) {
    let count = 0;
    for (let i=0;i<nums.length;i++){
        for (let j=1;j<nums.length;j++){
          if(nums[i] == nums[j] && (i*j)%k ===0 && i<j){
            count++;
          }
        }    
    }
    return count;
};

let nums = [3,1,2,2,2,1,3];
let k = 2;
countPairs(nums,k);