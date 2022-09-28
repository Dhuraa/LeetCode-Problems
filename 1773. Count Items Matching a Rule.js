console.log("hi");

var countMatches = function (items, ruleKey, ruleValue) {
  let counter = 0;
  let ind;
  let temp = ["type", "color", "name"];
  for (let i = 0; i < temp.length; i++) {
    if(temp[i] == ruleKey){
      ind = i;
    }
  }
  for (let i = 0; i < items.length; i++) {
   if(items[i][ind] == ruleValue){
    counter++;
   }
  }
  return counter;
};

let items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]];
let ruleKey = "color";
let ruleValue = "silver";
countMatches(items, ruleKey, ruleValue);
