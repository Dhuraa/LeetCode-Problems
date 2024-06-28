//Frequency Counter

var containsDuplicate = function(nums) {
    let frequency = {};
    for (let val of nums){
        frequency[val] = (frequency[val] || 0) + 1;
    }
    for (key in frequency){
        if(frequency[key] > 1){
            return true;
        }
    }
    return false;
};

nums = [1,2,3,4];
console.log(containsDuplicate(nums));