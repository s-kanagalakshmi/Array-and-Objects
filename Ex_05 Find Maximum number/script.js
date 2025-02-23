//DOM Declaration
let getElements = document.getElementById("arrayInput")
let inputElements = document.getElementById("arrayDisplay")
let result = document.getElementById("outputDisplay")
let maximum = document.getElementById("maximumButton")
let add = document.getElementById("addButton")

let inputArray = []

//Main function
//adding elements
add.addEventListener("click", function () {
    inputArray.push(getElements.value)
    inputElements.textContent = inputArray
    getElements.value=""
})
//reversing the array elements
maximum.addEventListener("click", function () {
    result.textContent = Math.max(...inputArray)
})