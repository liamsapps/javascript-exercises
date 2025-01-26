const sumAll = function(inputInteger1, inputInteger2) {
    let sum = 0;
    if (inputInteger1 < 0 || inputInteger2 < 0 || 
        isNaN(inputInteger1) || isNaN(inputInteger2) ||
        !(Number.isInteger(inputInteger1)) || !(Number.isInteger(inputInteger2))) {
        return "ERROR";
    }
    else if (inputInteger1 > inputInteger2) {
        for (let i = inputInteger2; i <= inputInteger1; i++) {
            sum += i;
        }
    }
    else {
        for (let i = inputInteger1; i <= inputInteger2; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
