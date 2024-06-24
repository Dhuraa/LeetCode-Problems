//Revisit Again

var differenceOfSum = function(nums) {
    let EleSum=0;
    let DigitSum = 0;

   for(let i=0; i<nums.length;i++){
    EleSum += nums[i];
    let n = nums[i];
    if((nums[i]/10) >= 1){
        while(n !=0){
            DigitSum = DigitSum + n % 10;
            n = Math.floor(n / 10);
        }
    }
    else{
        DigitSum+=nums[i]
    }
   }
   return Math.abs(EleSum - DigitSum);
};

let nums = [1,15,6,3];
differenceOfSum(nums);