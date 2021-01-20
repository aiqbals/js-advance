//old way
const promiseOne = new Promise((resolve, reject) => 
    setTimeout(resolve, 3000));
const promiseOTwo = new Promise((resolve, reject) => 
    setTimeout(reject, 3000));

    Promise.all([promiseOne, promiseOTwo]).then(data => console.log(data))
        .catch(e => console.log('something  failed!', e));

//2020 way
const promiseOne = new Promise((resolve, reject) => 
    setTimeout(resolve, 3000));
const promiseOTwo = new Promise((resolve, reject) => 
    setTimeout(reject, 3000));

Promise.allSettled([promiseOne, promiseOTwo]).then(data => console.log(data))
    .catch(e => console.log('something  failed!', e));