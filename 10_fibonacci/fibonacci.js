const fibonacci = function(index) {
    if (index < 0) return 'OOPS';
    
    index = +index;
    const fibSequence = [0, 1];
    if (index < 2) return fibSequence[index];

    updateFibSequence(index);
    return fibSequence[index];

    function updateFibSequence(num) {
        let nextFibNum;
        for (let i = 1; i < num; i++) {
            nextFibNum = fibSequence.at(-1) + fibSequence.at(-2);
            fibSequence.push(nextFibNum);
        }
    }
};

// Do not edit below this line
module.exports = fibonacci;
