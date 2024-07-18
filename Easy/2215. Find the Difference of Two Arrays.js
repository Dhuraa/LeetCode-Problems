var findDifference = function (nums1, nums2) {
    let cache1 = {};
    let cache2 = {};
    let arr1 = [];
    let arr2 = [];
  
    for (let val of nums1) {
      cache1[val] = (cache1[val] || 0) + 1;
    }
  
    for (let val of nums2) {
      cache2[val] = (cache2[val] || 0) + 1;
    }
  
    for (let key in cache1) {
      if (!(key in cache2)) {
        arr1.push(key);
      }
    }
  
    for (let key in cache2) {
      if (!(key in cache1)) {
        arr2.push(key);
      }
    }
  
    return [arr1,arr2];
  };
  
  let nums1 = [1, 2, 3];
  let nums2 = [2, 4, 6];
  console.log(findDifference(nums1, nums2));
  