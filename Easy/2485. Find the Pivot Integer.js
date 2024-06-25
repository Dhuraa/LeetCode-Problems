var pivotInteger = function(n) {
    if(n === 1){
        return 1;
    };
    for(let i=0;i<n;i++){
        let firstHalf = ((i*(i+1))/2);
        let secondHalf = ((n-i+1)/2)*(n+i);
        if(firstHalf === secondHalf){
            return i;
        }
    }
    return -1;
};