const removeFromArray = function() {

    // function findElement(inputArray, element) {
    //     let elementExists = inputArray.includes(element);
    //     return elementExists;
    // }
    
    function findDuplicates(inputArray, element) {
        // will return single element if no duplicates exist
        // but, if duplicates exist, will return a listing of the element (by number of duplicates)
        let duplicateCheck = inputArray.filter((item) => item === element);
        return duplicateCheck;
    } 

    let message = "";
    let args = arguments.length;
    
    if (args === 0) {
        console.log("You must supply an array.");
        message = "You must supply an array.";
        return message;
    }
    else if (args === 1) {
        console.log("You must supply at least 1 array element to remove");
        message = "You must supply at least 1 array element to remove";
        return message;
    }
    else {
        // loop through each element to be removed  
        for (let i = 1; i < arguments.length; i++) {
            
            let findElement = (inputArray, element) => arguments[0].includes(arguments[i]);
            
            if (findElement) {
            
                let arrayElements = findDuplicates(arguments[0], arguments[i]);

                if (arrayElements.length) {

                    let toBeRemoved = arguments[i];

                    // runs for each element duplicate, or once if no duplicates
                    for (let j = 0; j < arrayElements.length; j++) {
                        let removed = arguments[0].splice(arguments[0].findIndex(element => element === toBeRemoved), 1);    
                    }
                }
            }
        }
    }
        
    return arguments[0];
    
};

// Do not edit below this line
module.exports = removeFromArray;
