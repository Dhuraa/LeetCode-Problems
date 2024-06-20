var kidsWithCandies = function(candies, extraCandies) {
    return candies.map((candy) => {
        if((candy + extraCandies) >= Math.max(...candies)){
            return true
        }
        else{
            return false
        }
    })

};
candies = [2,3,5,1,3];
extraCandies = 3;
kidsWithCandies(candies,extraCandies);
