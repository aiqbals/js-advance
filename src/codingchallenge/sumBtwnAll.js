function sumBtwnAll(arr) {
    // check input validty
    var start = Math.min(arr[0], arr[1]);
    var end = Math.max(arr[0], arr[1]);
    //console.log(start, end);
    var total = 0;
    for(var i = start; i <= end; i++) {
        total += i;
    }

    return total;
}
sumAll([1,4])

//sol 2
function sumBtwnAll(arr) {
    // check input validty
    var start = Math.min(arr[0], arr[1]);
    var end = Math.max(arr[0], arr[1]);
    //console.log(start, end);
    var total = 0;
    for(var i = start; i <= end; i++) {
        total += i;
    }

    return total;
}
sumAll([1,4])


//sumAll
function sumAll(arr) {
    // check input validty
    return arr.reduce( (acc, el) => acc + el, 0)
}
sumAll([1,4,5])

//sol 2
function sumAll(arr) {
    let sum = 0;
    for(let i= 0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
sumAll([1,4,5])