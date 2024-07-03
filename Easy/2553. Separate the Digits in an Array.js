//Revisit Again
//String Operations

var separateDigits = function (nums) {
    let output = [];
    for (let i = 0; i < nums.length; i++) {
      let digits = nums[i].toString().split('');
      digits = digits.map(Number)
      output = output.concat([...digits]);
    }
    return output;
  };
  
  let nums = [13, 25, 83, 77];
  separateDigits(nums);
  