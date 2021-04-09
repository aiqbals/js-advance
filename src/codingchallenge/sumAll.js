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