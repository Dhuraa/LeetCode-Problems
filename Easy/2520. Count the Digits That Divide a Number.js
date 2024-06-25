var countDigits = function(num) {
    let numSt = num.toString();
    let arr = [...numSt];
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(num%parseInt(arr[i]) === 0){
            count++
        }
    }
   return count;
};

num=7;
countDigits(num);