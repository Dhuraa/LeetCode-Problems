var mostWordsFound = function(sentences) {
    let strLength =[];
    for (let i=0;i<sentences.length;i++){
        strLength.push(sentences[i].split(" ").length);
    }
    return Math.max(...strLength)
};

sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];

console.log(mostWordsFound(sentences));