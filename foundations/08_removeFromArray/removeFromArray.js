const removeFromArray = function(arr, ...dA) {

    const newA = [];

    arr.forEach((item) => {
        if (!dA.includes(item)) {
            newA.push(item);
        }
    });

    return newA;
};

// Do not edit below this line
module.exports = removeFromArray;
