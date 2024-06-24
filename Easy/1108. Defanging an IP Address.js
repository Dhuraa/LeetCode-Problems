var defangIPaddr = function(address) {
    return address.replaceAll(".","[.]")
};

// var defangIPaddr = function(address) {
//     return address.replace(/\./g,'[.]')
// };