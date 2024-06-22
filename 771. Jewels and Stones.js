var numJewelsInStones = function(jewels, stones) {
    let arr = [...jewels];
    let count = 0;
    for (let i=0;i<stones.length;i++){
        for (let j=0;j<arr.length;j++){
            if(stones[i] === arr[j]){
                count++;
            }
        }
    }
    return count;
};

jewels = "ZZ";
stones = "aAAbbbb";
numJewelsInStones(jewels,stones)