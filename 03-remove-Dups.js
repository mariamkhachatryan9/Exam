//3. Remove duplicates in an array.

let dupes = [1, 2, 3, 'a', 'a', 'f', 3, 4, 2, 'd', 'd'];

function removeDups(arr) {
    uniqueArray = arr.filter(function (item, pos) {
        return arr.indexOf(item) == pos;
    })
    return uniqueArray;

}
console.log(removeDups(dupes));