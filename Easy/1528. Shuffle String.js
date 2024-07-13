var restoreString = function(s, indices) {
    let str = s.split('');
    for (let i=0;i<s.length;i++){
        str.splice(indices[i],1,s[i]);
    }
    return str.join('');
};

let s = "codeleet";
let indices = [4,5,6,7,0,2,1,3];
restoreString(s,indices);