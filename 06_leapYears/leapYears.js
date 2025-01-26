const leapYears = function(inputYear) {
    
    // let message;
    if (inputYear % 400 === 0) {
        // console.log('LEAP YEAR');
        // message = 'LEAP YEAR';
        answer = true;
    }
    else if (inputYear % 100 === 0) {
        // console.log('NON LEAP YEAR');
        // message = 'NON LEAP YEAR';
        answer = false;
    }
    else if (inputYear % 4 === 0) {
        // console.log('LEAP YEAR');
        // message = 'LEAP YEAR';
        answer = true;
    }
    else {
        // console.log('NON LEAP YEAR');
        // message = 'NON LEAP YEAR';
        answer = false;
    }
    // return message;
    return answer;
};

// Do not edit below this line
module.exports = leapYears;
