const sumAll = function(a,b) {
    let sum = 0;
 const small = Math.min(a,b);
 const large = Math.max(b,a);
    for (let i = small; i <= large;i++) {
      sum += i;

    }
  return sum;
};


// Do not edit below this line
module.exports = sumAll;


