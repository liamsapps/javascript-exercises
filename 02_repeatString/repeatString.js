const repeatString = function(inputString, numberOfTimes) {
    if (numberOfTimes < 0) {
        return "ERROR";
    }
    else {
        return inputString.repeat(numberOfTimes);
    }
}

// using arrow function - NO WORK - FAILS check for negative numbers !!!
//const repeatString = (inputString, numberOfTimes) => inputString.repeat(numberOfTimes);

// Do not edit below this line
module.exports = repeatString;
