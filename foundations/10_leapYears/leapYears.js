const leapYears = function(year) {
    const isYearLeap = year % 4 === 0;
    const isCenturie = year % 100 === 0;
    const isyear400 = year % 400 === 0;

    if (isYearLeap && (!isCenturie || isyear400)) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
