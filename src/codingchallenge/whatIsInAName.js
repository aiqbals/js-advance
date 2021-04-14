function whatIsInAName(collection, source) {
    //check 
    let arr = [];
    let keys = Object.keys(source);
    //console.log(keys)
    Object.keys(collection).forEach( element => {
        if(element.hasOwnProperty(keys)) 
        return arr.push(element)
    })

    return arr;
}
whatIsInAName([{ first: "Azief", last: "Hoque"}, { first: "Aydin", last: null}, { first: "Lany", last:"Pinky"}], {last: "Pinky"});