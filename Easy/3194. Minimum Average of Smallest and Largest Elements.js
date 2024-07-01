var minimumAverage = function(nums) {
    nums.sort((a,b)=>a-b);
    let n = nums.length-1;
    let avgArr = [];
    while(n>0){
        let avg = ((nums[0] + nums[n])/2);
        nums.pop(n);
        nums.shift();
        avgArr.push(avg); 
        n = nums.length-1;
    }
    avgArr.sort((a,b) => a-b);
    return avgArr[0];
};

let nums = [1,2,3,7,8,9];


console.log(minimumAverage(nums));