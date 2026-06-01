const reverseString = function(arrR) {
    let reverse = [];

    for (let i = arrR.length - 1; i >=0;i--) {
        reverse.push(arrR[i]);
        
        
    }
    return reverse.join("") ;
};


// Do not edit below this line
module.exports = reverseString;
