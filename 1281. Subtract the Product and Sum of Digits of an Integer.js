var subtractProductAndSum = function(n) {
    let m = n+"";
    let final = [...m];
    let product = 1;
    let sum = 0;
    for(let i=0;i<final.length;i++){
        sum += parseInt(final[i]);
        product = product * final[i];
    }
    return (product-sum);
};

let n = 234;
subtractProductAndSum(n);