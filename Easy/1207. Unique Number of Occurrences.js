//Revisit again
//Frequency Counter
//Set

var uniqueOccurrences = function (arr) {
    let frequency = {};

    for (let val of arr) {
        frequency[val] = (frequency[val] || 0) + 1;
    }

    let vals = Object.values(frequency);
    let frequency2 = {};

    for (let val of vals) {
        frequency2[val] = (frequency2[val] || 0) + 1;
    }

    if ((new Set(vals)).size !== vals.length) {
        return false;
    }
    return true;
};

arr = [1, 2, 2, 1, 1, 3];
uniqueOccurrences(arr);