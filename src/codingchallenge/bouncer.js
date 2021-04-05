//Falsy value in JS - false, null, 0, "", undefined, NaN
//if("") console.log('not falsy') // will output undefined

function bouncer(arr) {
    const fltr = [];

    arr.filter( e => {
        if(!e === false || null || 0 || "" || undefined || NaN) {
            fltr.push(e)
        }
    })

    return fltr;
}
bouncer([7, "ate", "", false, 9]);

//sol 2
function bouncer(arr) {
    const fltr = [];

    arr.filter( e => {
        if(!e === false || null || 0 || "" || undefined || NaN) {
            fltr.push(e)
        }
    })

    return fltr;
}
bouncer([7, "ate", "", false, 9]);
