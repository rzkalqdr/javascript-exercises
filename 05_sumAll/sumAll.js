const sumAll = function() {
    if (arguments[0] < 0 || arguments[1] < 0 || (typeof arguments[0] !== 'number') || (typeof arguments[1] !== 'number')) {
        return 'ERROR';
    }

    let sum = 0;
    let max = (arguments[0] > arguments[1]) ? arguments[0] : arguments[1];
    let min = (arguments[0] < arguments[1]) ? arguments[0] : arguments[1];
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
