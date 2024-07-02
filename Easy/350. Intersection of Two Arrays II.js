//Revisit Again
//Can be solved with two pointers

var intersect = function(nums1, nums2) {
    let frequency1 = {};
    let frequency2 = {};
    let output = [];

    for (let val of nums1){
        frequency1[val] = (frequency1[val] || 0) +1;
    }

    for (let val of nums2){
        frequency2[val] = (frequency2[val] || 0) +1;
    }

    for (let key in frequency1){

        if((frequency1[key] && frequency2[key]) > 0){
        let min = Math.min(parseInt(frequency1[key]),parseInt(frequency2[key]))
          for(let i=0; i<min;i++){
            output.push(parseInt(key));
          }
        }
    }
    return output;
};

let nums1 = [1,2,2,1];
let nums2 = [2];
intersect(nums1,nums2);