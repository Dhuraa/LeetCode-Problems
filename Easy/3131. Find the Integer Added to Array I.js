var addedInteger = function(nums1, nums2) {
    nums1.sort((a,b)=> a -b);
    nums2.sort((a,b)=> a -b);
    
    return nums2[0] - nums1[0];
};

let nums1 = [2,6,4];
let nums2 = [9,7,5];
addedInteger(nums1,nums2);