//Revisit Again: To reduce time complexity

var sumOfTheDigitsOfHarshadNumber = function(x) {
    let arr = x.toString().split('');
    let arrSum = arr.reduce((acc,val) => parseInt(acc)+parseInt(val) );
    if(x%parseInt(arrSum) === 0){
        return parseInt(arrSum);
    }
    else{
        return -1;
    }
};

let x=23;
console.log(sumOfTheDigitsOfHarshadNumber(x));