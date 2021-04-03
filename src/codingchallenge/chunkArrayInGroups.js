function chunkArrayInGroups(arr, size) {
    //check
    if(arr.length === 0 ) {
        return "incorrect input"
    }

    var groups = [];
    while (arr.length > 0) {
        groups.push(arr.slice(0, size))[0]
        arr = arr.slice(size)
    }

    return groups;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2)

//sol 2
function chunkArrayInGroups(arr, size) {
    //check
    if(arr.length === 0 ) {
        return "incorrect input"
    }

    var groups = [];
    while (arr.length > 0) {
        groups.push(arr.splice(0, size))
    }

    return groups;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2)