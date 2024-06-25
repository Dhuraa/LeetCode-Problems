//Frequency Counter Problem 

var majorityElement = function(nums) {
    let frequency = {};
    
    for (let val of nums){
        frequency[val] = (frequency[val] || 0) + 1;
    }

   let count = Object.values(frequency);

   let maxCount = Math.max(...count);

   for(let key in frequency){
    if(frequency[key] === maxCount){
        return parseInt(key);
    }
   }
};

let nums = [2,2,1,1,1,2,2];
majorityElement(nums);