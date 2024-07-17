var maximizeSum = function (nums, k) {
    let sum = 0;
    let maxNo = Math.max(...nums);
    for (let i = 0; i < k; i++) {
      sum += maxNo + i;
    }
    return sum;
  };
  
  let nums = [1, 2, 3, 4, 5];
  let k = 3;
  maximizeSum(nums, k);
  