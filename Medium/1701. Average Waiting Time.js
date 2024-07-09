var averageWaitingTime = function (customers) {
    let sum = 0;
    let waitTime = 0;
    for (let i = 0; i < customers.length; i++) {
      if (i === 0 || sum < customers[i][0]) {
        sum = 0;
        sum += customers[i][0] + customers[i][1];
        waitTime += sum - customers[i][0];
      } else {
        sum += customers[i][1];
        waitTime += sum - customers[i][0];
      }
    }
    waitTime = waitTime / customers.length;
    return waitTime;
  };
  
  customers = [
    [1, 2],
    [2, 5],
    [4, 3],
  ];
  averageWaitingTime(customers);