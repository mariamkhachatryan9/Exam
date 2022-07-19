// 1. Use array methods to turn data into result

let data = [
    ["The", "red", "horse"],
    ["Plane", "over", "the", "ocean"],
    ["Chocolate", "ice", "cream", "is", "awesome"],
    ["this", "is", "a", "long", "sentence"]
]

function groupeWords(array) {
    let newArray=[];
    let result = array.join(",");
    newArray.push(result);
    return newArray;
}

console.log(groupeWords(data));

// // Result
// ['The red horse', 
// 'Plane over the ocean', 
// 'Chocolate ice cream is awesome', 
// 'this is a long sentence'];
