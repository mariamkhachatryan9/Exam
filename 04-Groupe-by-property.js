let arr = [
    { name: 'Alice', job: 'Data Analyst', country: 'AU' },
    { name: 'Bob', job: 'Pilot', country: 'US' },
    { name: 'Lewis', job: 'Pilot', country: 'US' },
    { name: 'Karen', job: 'Software Eng', country: 'CA' },
    { name: 'Jona', job: 'Painter', country: 'CA' },
    { name: 'Jeremy', job: 'Artist', country: 'SP' },
];

function groupe(arr, prop) {
    let result = {};
    arr.forEach(element => {
        if (result.hasOwnProperty(element[prop])) {
            result[element[prop]].push(element);
        } else {
            result[element[prop]] = [element];
        }
    });
    return result;
}

console.log(groupe(arr, 'country'));