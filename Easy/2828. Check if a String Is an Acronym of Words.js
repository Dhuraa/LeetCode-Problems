var isAcronym = function (words, s) {
    if (words.length != s.length) {
      return false;
    }
    for (let i = 0; i < words.length; i++) {
      if (words[i][0] != s[i]) {
        return false;
      }
    }
  
    return true;
  };
  
  let words = ["never","gonna","give","up","on","you"];
  let s = "ngguoy";
  console.log(isAcronym(words, s));
  