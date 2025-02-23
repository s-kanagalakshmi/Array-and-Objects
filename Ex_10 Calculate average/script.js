function average(inputArray) {
    let temp = 0
    for (let i = 0; i <inputArray.length; i++) {
        temp = temp + inputArray[i]
    
    }
    return temp/inputArray.length
}
console.log(average([10, 20, 30, 40, 50]))