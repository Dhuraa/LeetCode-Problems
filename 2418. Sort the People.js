//Revisit again
var sortPeople = function(names, heights) {
    let details = [];
    let output = [];
    for (let i=0;i<names.length;i++){
        details[i] = {"name":names[i],"height":heights[i]}
    }
    details.sort((a, b) => b.height - a.height);
    for (let i=0;i<names.length;i++){
        output.push(details[i].name);
    }
   return output;
};


let names = ["Mary","John","Emma"];
let heights = [180,165,170];
sortPeople(names, heights);