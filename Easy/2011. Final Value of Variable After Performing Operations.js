var finalValueAfterOperations = function (operations) {
    let val = 0;
    let b =0;
    let total;
    for (let i = 0; i < operations.length; i++) {
      if((operations[i] === "--X") || (operations[i] === "X--")){
        val = -1;
      }
      if ((operations[i] === "++X") || (operations[i] === "X++")) {
        val = 1;
      }
      total = val + b;
      b = total;
    }
    return total;
  };
  
  let operations = ["--X", "X++", "X++"];
  finalValueAfterOperations(operations);