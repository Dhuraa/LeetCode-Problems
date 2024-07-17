var countGoodTriplets = function(arr, a, b, c) {
    let count = 0;
    for (let i=0; i<arr.length;i++){
        for (let j=i+1; j<arr.length;j++){
            for (let k=j+1; k<arr.length;k++){
                let condA = Math.abs(arr[i] - arr[j]);
                let condB = Math.abs(arr[j] - arr[k]);
                let condC = Math.abs(arr[i] - arr[k]);

                if(condA <=a && condB <=b && condC <=c && i<j<k ){
                    count++;
                }
            }
        }
    }
    return count;
};

let arr = [3,0,1,1,9,7];
let a = 7;
let b = 2;
let c = 3;
console.log(countGoodTriplets(arr,a,b,c));