var maximum69Number  = function(num) {
    let text = num.toString();
    for (let i=0; i<text.length; i++){
        if(text[i] === '6'){
            text = text.replace("6", "9");
            return parseInt(text);
        }
    }
    return num;
};

let num = 9999;
console.log(maximum69Number(num));