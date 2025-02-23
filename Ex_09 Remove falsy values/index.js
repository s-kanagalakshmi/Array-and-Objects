function removeFalsy(inputArray) {
    let newArray = []

    for (let i = 0; i < inputArray.length; i++) { 
        if (inputArray[i]) { 
            newArray.push(inputArray[i]);
        }
    }

    return newArray;
}

// Example
let result = removeFalsy([0, 1, false, 2, '', 3]);
console.log(result);
