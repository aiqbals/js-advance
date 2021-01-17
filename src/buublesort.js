
let a = [3,7,9,2,5,50,15];

//ascending
for (let i= 0; i<a.length; i++) {
    for(let j=0; j<a.length; j++) {
        if(a[j] < a[j-1]) {
            let temp = a[j-1];
            a[j-1] = a[j];
            a[j] = temp;
        }
    }
}
console.log(a);
   
//decending
    for (let i= 0; i<a.length; i++) {
        for(let j=0; j<a.length; j++) {
            if(a[j] > a[j-1]) {
                let temp = a[j-1];
                a[j-1] = a[j];
                a[j] = temp;
            }
        }
    }
    console.log(a);
