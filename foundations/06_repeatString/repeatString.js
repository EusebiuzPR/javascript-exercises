const repeatString = function(string,num) {
    
    let r = "";
    for (let i = 0;i < num;i++) {
        
        r += string;
    }
    if (num < 0 ){
        return "ERROR"
    }
        return r;

};
// Do not edit below this line
module.exports = repeatString;
