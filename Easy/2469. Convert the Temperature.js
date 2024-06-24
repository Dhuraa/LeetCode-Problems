var convertTemperature = function(celsius) {
    let returnArr=[];
    returnArr.push(celsius + 273.15);
    returnArr.push(celsius*1.80+32.00);
    return returnArr;
};

celsius = 36.50;
convertTemperature(celsius);