//Binary Problems

var sumIndicesWithKSetBits = function(nums, k) {
    let sum =0;
    for(let i=0;i<nums.length;i++){
        let val = i.toString(2);
        let split = [...val];
        let count = 0;
        for(let j=0;j<split.length;j++){
            if(split[j] === '1'){
                count++;
            }
        }
        if(count === k){
            sum+= nums[i];
        }
    }
    return sum;
};


let nums = [4,3,2,1];
let k = 2;
sumIndicesWithKSetBits(nums,k);