var numWaterBottles = function(numBottles, numExchange) {
    let sum = numBottles;
    let n = numBottles
    while(n>1){
        sum += Math.floor(n/numExchange)  ;
        n = Math.floor(n/numExchange) +  (n%numExchange);
        if(n<numExchange){
            n=0;
        }
    }
    return sum;
};

let numBottles =9;
let numExchange = 3;
numWaterBottles(numBottles,numExchange);