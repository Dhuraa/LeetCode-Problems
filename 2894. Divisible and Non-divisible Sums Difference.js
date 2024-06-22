var differenceOfSums = function(n, m) {
    let divisible = 0;
    let notdivisible = 0;
    for (let i=1;i<=n;i++){
        if(i%m == 0){
           divisible+= i;
        }
        else{
            notdivisible+= i;
        }
    }
    return(notdivisible - divisible);
};

let n = 5;
let m =6;
differenceOfSums(n,m);