var shuffle = function(nums, n) {
    var p1 = nums.slice(0,n);
    var p2 = nums.slice(n);
    let output = [];
    for (let i=0;i<n;i++){
      output.push(p1[i]);
      output.push(p2[i]);
    }
      return output;
  };
  
  var nums = [2,5,1,3,4,7];
  var n = 3;
  shuffle(nums,n)