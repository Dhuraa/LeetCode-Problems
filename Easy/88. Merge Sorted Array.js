//Modifying original array

var merge = function (nums1, m, nums2, n) {
    nums1.splice(m);
    nums2.splice(n);
    for (let i = 0; i < nums2.length; i++) {
      nums1.push(nums2[i]);
    }
    nums1.sort((a, b) => a - b);
    return nums1;
  };
  
  let nums1 = [1, 2, 3, 0, 0, 0];
  let m = 3;
  let nums2 = [2, 5, 6];
  let n = 3;
  
  console.log(merge(nums1, m, nums2, n));