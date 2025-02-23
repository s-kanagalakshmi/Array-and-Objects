function groupObjects(arrayOfObjects, property) {
    return arrayOfObjects.reduce((Initial, CurrentValue) => {
        let key = CurrentValue[property];

        if (!Initial[key]) {
            Initial[key] = []
        }

        Initial[key].push(CurrentValue)
        return Initial
    }, {})
}

// Example
let products = [
    { id: 1, category: 'fruit' },
    { id: 2, category: 'vegetable' },
    { id: 3, category: 'fruit' }
];

console.log(groupObjects(products, 'category'));
