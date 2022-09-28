var maximumWealth = function (accounts) {
    let output = [];
    for (let i = 0; i < accounts.length; i++) {
      let a;
      let b = 0;
      for (let j = 0; j < accounts[i].length; j++) {
        a = b + accounts[i][j];
        b = a;
      }
      output.push(b);
    }
  
    let result = Math.max(...output);
    return result;
  };
  
  accounts = [
    [1, 2, 5],
    [3, 2, 1],
  ];
  maximumWealth(accounts);