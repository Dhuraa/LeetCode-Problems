//Revisit Again

var firstPalindrome = function(words) {
    let firstWord = "";
    for (let i=0;i<words.length;i++){
        let inword = words[i];
        let count=0;
        for (let j=0; j<inword.length;j++){
            if(inword[j] === inword[inword.length - j - 1]){
                count++;
                if(count === inword.length){
                    firstWord = inword;
                    return firstWord;
                }
            }
        }
    }
    return firstWord;
};

let words = ["def","ghi"];
console.log(firstPalindrome(words));