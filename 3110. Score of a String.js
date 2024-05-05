var scoreOfString = function(s) {
    let arrcode =[];
    for (var i = 0; i < s.length; i++) {
        arrcode.push(s.charCodeAt(i));
    }

    let finalSum = 0;
    let a;
    for (var i = 0; i < arrcode.length-1; i++) {
        a = Math.abs(arrcode[i]- arrcode[i+1])
        finalSum = finalSum + a
    }
    return finalSum;
};


s = "zaz"
scoreOfString(s)
