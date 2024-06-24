//Revisit again
//Frequency Counter
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    let frequency1 = {};
    let frequency2 = {};

    for (let val of s) {
        frequency1[val] = (frequency1[val] || 0) + 1;
    }

    for (let val of t) {
        frequency2[val] = (frequency2[val] || 0) + 1;
    }

    for (let key in frequency1) {
        if (!(key in frequency2)) {
            return false;
        }
        if (frequency1[key] !== frequency2[key]) {
            return false;
        }
    }
    return true;
};


let s = "rat";
let t = "car";
isAnagram(s, t);