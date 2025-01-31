const leapYears = function(year) {
    let isDivisibleBy100 = !(year % 100);
    let isDivisibleBy400 = !(year % 400);
    let isDivisibleBy4 = !(year % 4);

    if (isDivisibleBy100) return isDivisibleBy400;
    return isDivisibleBy4;
};

// Do not edit below this line
module.exports = leapYears;
