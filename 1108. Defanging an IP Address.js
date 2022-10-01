var defangIPaddr = function(address) {
    return address.replace(/\./g,'[.]')
};

address = "255.1.1.1";
defangIPaddr(address);