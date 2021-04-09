function sumAll(arr) {
    // check input validty
    var start = Math.min(arr[0], arr[1]);
    var end = Math.max(arr[0], arr[1]);
    //console.log(start, end);
    var total = 0;
    for(var i = start; i < end; i++) {
        total += i;
    }
}
sumAll([1,4])


function sumAll(arr) {
    // check input validty
    let acc = 0;
    arr.reduce( (el, index, acc) => {
        acc += el
    }, acc)

    return acc;
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