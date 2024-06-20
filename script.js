var arrayStringsAreEqual = function (word1, word2) {
    let word1Sum = word1.reduce((acc, sum) => {
        return acc + sum;
    })
    let word2Sum = word2.reduce((acc, sum) => {
        return acc + sum;
    })
    if (word1Sum === word2Sum) {
        return true;
    }
    else {
        return false;
    }
};

word1 = ["a", "cb"];
word2 = ["ab", "c"]
console.log(arrayStringsAreEqual(word1, word2))