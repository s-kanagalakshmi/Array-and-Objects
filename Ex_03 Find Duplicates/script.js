//DOM Declaration
let getElements = document.getElementById("arrayInput")
let inputElements = document.getElementById("arrayDisplay")
let result = document.getElementById("outputDisplay")
let duplicate = document.getElementById("duplicateButton")
let add = document.getElementById("addButton")

let inputArray = []

//Main function
//adding elements
add.addEventListener("click", function () {
    inputArray.push(getElements.value)
    inputElements.textContent = inputArray
    getElements.value=""
})
//finding duplicate in array elements
duplicate.addEventListener("click", function () {
let duplicateArray=inputArray.filter((element,position)=>{
    return inputArray.indexOf(element)!==position
})
if(duplicateArray.length>0)
    result.textContent = "Array has Duplicate elements"
else
result.textContent = "No duplicate elements in array"

})