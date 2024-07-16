var findIntersectionValues = function (nums1, nums2) {
    let cache1 = {};
    let cache2 = {};
    let val1 = 0;
    let val2 = 0;
  
    for (let val of nums1) {
      cache1[val] = (cache1[val] || 0) + 1;
    }
  
    for (let val of nums2) {
      cache2[val] = (cache2[val] || 0) + 1;
    }
  
    for (key in cache1) {
      if (key in cache2) {
        console.log(key);
        val2 += cache1[key];
        val1 += cache2[key];
      }
    }
  
    return [val2,val1];
  };
  
  let nums1 = [3,4,2,3];
  let nums2 =[1,5];
  console.log(findIntersectionValues(nums1, nums2));
  