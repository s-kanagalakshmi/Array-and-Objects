// DOM Elements
let getElements = document.getElementById("arrayInput");
let inputElements = document.getElementById("arrayDisplay");
let result = document.getElementById("outputDisplay");
let flatten = document.getElementById("flatButton");
let add = document.getElementById("addButton");

let inputArray = []

//Adding elements
add.addEventListener("click", function () {
    inputArray.push(getElements.value.split(","))
    inputElements.value = JSON.stringify(inputArray)
    getElements.value = "";
});

// Flatten array
flatten.addEventListener("click", function () {
    result.value = JSON.stringify(inputArray.flat())
});
