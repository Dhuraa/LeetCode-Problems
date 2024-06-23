var countMatches = function (items, ruleKey, ruleValue) {
  let itemCom = ["type", "color", "name"];
  let ind = 0;
  let count = 0;

  for (let i = 0; i < itemCom.length; i++) {
      if (itemCom[i] === ruleKey) {
          ind = i;
      }
  }

  for (let i = 0; i < items.length; i++) {
      if (items[i][ind] === ruleValue) {
          count++;
      }
  }

  return count;
};

let items = [["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]];
let ruleKey = "color";
let ruleValue = "silver";
countMatches(items, ruleKey, ruleValue);