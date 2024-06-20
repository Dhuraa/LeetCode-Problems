var findWordsContaining = function(words, x) {
    let returnArr = [];
    for (let i=0; i<words.length;i++){
        if(words[i].includes(x)){
            returnArr.push(i);
        }
    }
    return returnArr;
};

words = ["abc","bcd","aaaa","cbc"];
x = "a";