var isPalindrome = function(x) {
    if(x<0){
        return false
    }
    else{
        x = x.toString();
        let arr = [...x];
        for (let i=0;i<arr.length;i++){
            if(arr[i] != arr[arr.length-1-i]){
                return false;
            }
        }
        return true;
    }
};

let x=1211;
console.log(isPalindrome(x));