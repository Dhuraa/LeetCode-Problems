var reversePrefix = function(word, ch) {
    let ind = word.indexOf(ch);
        console.log(ind);
        let firstHalf= word.substring(0,ind+1);
        firstHalf = firstHalf.reverse();
        let secondHalf = word.substring(ind+1);
        console.log(firstHalf,secondHalf);
};



let word = "abcdefd";
let ch = "d";
reversePrefix(word,ch);