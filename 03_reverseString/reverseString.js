const reverseString = (inputString) => {
    let reversed = [];
    for (let i = 0; i < inputString.length; i++) {
        reversed.unshift(inputString[i]);
    }    
    return reversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
