
var numJewelsInStones = function(jewels, stones) {
    let output =0;
    for(let i=0;i<jewels.length;i++){
        for(let j=0;j<stones.length;j++){
            if(stones[j] === jewels[i])
            output++;
        }
    }
    return output;
};

let jewels =  "z";
let stones ="ZZ";
numJewelsInStones(jewels,stones);