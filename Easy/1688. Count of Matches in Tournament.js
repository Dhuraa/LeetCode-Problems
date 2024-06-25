var numberOfMatches = function (n) {
    let matches = 0;
    while (n >= 2) {
        if (n % 2 === 0) {
            matches += (n / 2);
            n = n/2;
        }
        else {
            matches += ((n - 1) / 2);
            n = ((n - 1) / 2 + 1);
        }

    }
    return matches;
};

let n = 14;
console.log(numberOfMatches(n));