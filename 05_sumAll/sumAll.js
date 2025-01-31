const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)) { return 'ERROR'; }
    if (start < 0 || end < 0) { return 'ERROR'; }

    let sum = 0;
    let trueStart = (start < end ? start : end), trueEnd = (end > start ? end : start);
    for (let i = trueStart; i <= trueEnd; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
