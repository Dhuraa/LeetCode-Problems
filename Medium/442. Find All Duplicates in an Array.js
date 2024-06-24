//Frequency Counter

var findDuplicates = function(nums) {
    let frequency = {};
    let output = [];
    for (let val of nums){
        frequency[val] = (frequency[val] || 0) + 1;
    }
    for (let key in frequency){
        if(frequency[key] == 2){
            output.push(parseInt(key));
        }
    }
    return output;
};


let nums = [4,3,2,7,8,2,3,1];
findDuplicates(nums);