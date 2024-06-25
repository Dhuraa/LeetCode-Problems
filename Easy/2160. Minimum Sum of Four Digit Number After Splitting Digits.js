var minimumSum = function(num) {
    let arr =[];
    let val = num;
   while(val>0){
    arr.push(val%10);
    val = Math.floor(val/10);
   }
   arr = arr.sort((a,b)=> a-b);
   let num1 = arr[0]+""+arr[2];
   let num2 = arr[1]+""+arr[3];
   return (parseInt(num1)+parseInt(num2));
  
};

let num = 2329;
minimumSum(num);