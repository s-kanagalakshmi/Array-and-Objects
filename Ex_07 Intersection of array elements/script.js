function sameElements(firstArray, secondArray) {
    let intersection = firstArray.filter(element => secondArray.includes(element));
    return intersection
}

// Example
let result = sameElements([1, 2, 3], [2, 3, 4]);
console.log(result)
