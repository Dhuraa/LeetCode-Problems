//Frequency Counter

var maxFrequencyElements = function(nums) {
    frequency = {};
    let frequencyCount = [];
    let maxCount;
    outputCount = 0;

    for (let val of nums){
        frequency[val] = (frequency[val] || 0) + 1;
    }

    for (let key in frequency){
        frequencyCount.push(frequency[key]);
    }

    maxCount = Math.max(...frequencyCount)

    for (let key in frequency){
        if(frequency[key] === maxCount){
            outputCount+= frequency[key];
        }
    }
    return outputCount;
};

let nums = [1,2,3,4,5];
maxFrequencyElements(nums);