//Neetcode150
//Not Optimum solution
var groupAnagrams = function(strs) {
    let cache = {};
    for (let val of strs){
        let KeyVal = val.split('').sort().join('');
        (!cache[KeyVal]) ? cache[KeyVal] =[val] : cache[KeyVal].push(val);
    }
    return Object.values(cache);
};

strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));